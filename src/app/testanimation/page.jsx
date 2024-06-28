"use client";

import React from "react";
import { motion } from "framer-motion";

function TestPage() {
  const variants = {
    variant1: {
      x: 300,
      y: 100,
      opacity: 0.8,
      transition: {
        duration: 4,
      },
    },
    variant2: {
      x: -500,
      y: -100,
      rotation: 270,
    },
  };

  return (
    <div className="h-full flex items-center justify-center">
      <motion.div
        className="w-96 h-96 bg-red-400 rounded"
        variants={variants}
        animate="variant1" //also we can conditional rendering
      ></motion.div>
    </div>
  );
}

export default TestPage;
