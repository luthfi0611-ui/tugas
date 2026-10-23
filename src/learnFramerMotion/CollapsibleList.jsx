import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Ikon Chevron sederhana menggunakan SVG
const ChevronIcon = ({ isExpanded }) => (
  <motion.svg
    animate={{ rotate: isExpanded ? 180 : 0 }}
    transition={{ duration: 0.3 }}
    className="w-5 h-5 text-gray-500 group-hover:text-gray-700"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </motion.svg>
);

function CollapsibleList() {
  const [expanded, setExpanded] = useState(null);

  const items = [
    { id: 1, title: 'Item 1', description: 'Ini adalah deskripsi lengkap untuk item 1 dengan informasi detail.' },
    { id: 2, title: 'Item 2', description: 'Ini adalah deskripsi lengkap untuk item 2 dengan informasi detail.' },
    { id: 3, title: 'Item 3', description: 'Ini adalah deskripsi lengkap untuk item 3 dengan informasi detail.' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md space-y-3">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Daftar Item</h2>

        {items.map((item) => {
          const isExpanded = expanded === item.id;

          return (
            <motion.div
              key={item.id}
              layout
              transition={{ layout: { duration: 0.3, type: "spring", stiffness: 300, damping: 30 } }}
              className="group overflow-hidden rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Header Accordion */}
              <button
                onClick={() => setExpanded(isExpanded ? null : item.id)}
                className="w-full p-4 flex justify-between items-center text-left focus:outline-none"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-semibold text-sm">
                    {item.id}
                  </div>
                  <h3 className="text-base font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">
                    {item.title}
                  </h3>
                </div>
                <ChevronIcon isExpanded={isExpanded} />
              </button>

              {/* Konten Accordion */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 pt-1 text-sm text-slate-600 border-t border-slate-100">
                      <p>{item.description}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default CollapsibleList;