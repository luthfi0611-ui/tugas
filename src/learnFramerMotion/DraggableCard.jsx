
import React from "react";
import { motion } from "framer-motion";

function DraggableCard() {
  return (
    <>
    <div className="flex justify-center items-center min-h-screen">
        <div class="w-96 p-30 rounded-md bg-yellow-400 shadow-lg text-base font-semibold text-center cursor-grab select-none active:cursor-grabbing">
            grab me
        </div>
    </div>
    </>
  );
}

export default DraggableCard;