
import React from "react";
import { motion } from "framer-motion";

function Framer() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <h1 className="text-4xl">Framer Motion</h1>
      </motion.div>
    </div>
  );
}

export default Framer;
