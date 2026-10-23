
import { motion } from "framer-motion";
import FeatureList from "./FeatureList";

export default function AnimateButton() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-5">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="rounded-lg bg-blue-500 px-6 py-3 text-white"
      >
        Click Me
      </motion.button>

      <FeatureList />
    </div>
  );
}
