import React from "react";
import { motion } from "framer-motion";

function Buttons({ children, icon, className, onClick, onKeyDown }) {
  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.8 }}
      animate={{ transition: { duration: 0.3, ease: "linear" } }}
      className={`inline-flex justify-center items-center bg-[#1D5ADD] text-white font-inter self-stretch md:self-auto py-2 px-3 md:py-3 md:px-4 md:gap-2 gap-1 lg:text-base md:text-base text-sm font-medium rounded-[0.25rem] focus:outline-none ${className} `}
      onClick={onClick}
      onKeyDown={onKeyDown}
      tabIndex={0}
      aria-label={children}
      role="button"
    >
      {children}
      {icon}
    </motion.button>
  );
}

function Buttons1({ children, icon, className, onClick, onKeyDown }) {
  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.8 }}
      animate={{ transition: { duration: 0.3, ease: "linear" } }}
      className={`inline-flex justify-center items-center font-medium  self-stretch md:self-auto font-inter py-2 px-3 md:py-3 md:px-4 md:gap-2 gap-1 lg:text-base md:text-sm text-xs hover:font-medium rounded-[0.25rem] focus:outline-none ${className} `}
      onClick={onClick}
      onKeyDown={onKeyDown}
      tabIndex={0}
      aria-label={children}
      role="button"
    >
      {children}
      {icon}
    </motion.button>
  );
}

export { Buttons, Buttons1 };
