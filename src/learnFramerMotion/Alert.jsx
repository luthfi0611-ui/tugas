
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Alert() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950">
      <div className="text-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowAlert(true)}
          className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Tampilkan Alert
        </motion.button>

        <AnimatePresence>
          {showAlert && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 flex items-center justify-center bg-black/60 p-4"
            >
              <div className="w-full max-w-sm rounded-2xl bg-white p-6 text-center shadow-2xl">
                <h2 className="mb-2 text-2xl font-bold text-slate-900">
                  Berhasil!
                </h2>

                <p className="mb-6 text-slate-600">
                  Button berhasil diklik, ngab!
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowAlert(false)}
                  className="rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white"
                >
                  Tutup
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Alert;
