
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function Step() {
  const [step, setStep] = React.useState(1);

  const contents = {
    1: {
      title: "Step 01",
      description: "Selamat datang di halaman step pertama.",
      icon: "🚀",
    },
    2: {
      title: "Step 02",
      description: "Kamu berhasil berpindah ke step berikutnya.",
      icon: "✨",
    },
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4 text-white">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-2xl">
        <div className="mb-6">
          <p className="mb-2 text-sm font-medium text-blue-400">
            FRAMER MOTION
          </p>
          <h1 className="text-3xl font-bold">Step Animation</h1>
          <p className="mt-2 text-sm text-slate-400">
            Pilih langkah untuk melihat animasinya.
          </p>
        </div>

        <div className="mb-6 flex gap-3">
          {[1, 2].map((number) => (
            <motion.button
              key={number}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setStep(number)}
              className={`flex-1 rounded-xl border px-4 py-3 font-semibold transition-colors ${
                step === number
                  ? "border-blue-500 bg-blue-600 text-white"
                  : "border-slate-700 bg-slate-800 text-slate-400 hover:border-slate-500"
              }`}
            >
              Step {number}
            </motion.button>
          ))}
        </div>

        <div className="mb-6 h-1.5 overflow-hidden rounded-full bg-slate-800">
          <motion.div
            className="h-full rounded-full bg-blue-500"
            animate={{ width: step === 1 ? "50%" : "100%" }}
            transition={{ duration: 0.4 }}
          />
        </div>

        <div className="min-h-52">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="rounded-xl border border-slate-700 bg-slate-800/70 p-6"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15 text-3xl">
                {contents[step].icon}
              </div>

              <h2 className="text-2xl font-bold">
                {contents[step].title}
              </h2>

              <p className="mt-2 leading-6 text-slate-400">
                {contents[step].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-sm text-slate-500">
            Langkah {step} dari 2
          </span>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setStep(step === 1 ? 2 : 1)}
            className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-blue-500"
          >
            {step === 1 ? "Selanjutnya →" : "← Sebelumnya"}
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default Step;
