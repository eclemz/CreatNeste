import React from "react";
import { motion } from "framer-motion";

function Buttons({ children, icon, className, onClick, onKeyDown }) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.8 }}
      animate={{ transition: { duration: 0.3, ease: "linear" } }}
      className={`inline-flex justify-center items-center min-h-12 min-w-12 bg-[#1D5ADD] hover:bg-[#4376E3] active:bg-[#123787] disabled:bg-[#A2BBF1] text-white font-inter self-stretch md:self-auto py-2 px-3 md:py-3 md:px-4 md:gap-2 gap-1 lg:text-base md:text-base text-sm font-medium rounded-[0.25rem] focus:outline-none ${className} `}
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
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.8 }}
      animate={{ transition: { duration: 0.3, ease: "linear" } }}
      className={`inline-flex justify-center items-center font-medium min-h-12 min-w-12 self-stretch md:self-auto font-inter py-2 px-3 md:py-3 md:px-4 md:gap-2 gap-1 lg:text-base md:text-sm text-xs hover:font-medium hover:bg-[#E8EFFC] active:bg-[#F0F0F0] disabled:bg-[#A2BBF1] border text-[#1D5ADD] hover:text-[#4376E3] active:text-[#123787] border-[#1D5ADD] hover:border-[#4376E3] active:border-[#123787] rounded-[0.25rem] focus:outline-none ${className} `}
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
function Buttons2({ children, icon, className, onClick, onKeyDown }) {
  return (
    <motion.button
      animate={{ transition: { duration: 0.3, ease: "linear" } }}
      className={`inline-flex justify-center items-center font-medium min-h-12 min-w-12 self-stretch md:self-auto font-inter text-[#1D5ADD] py-2 px-3 md:py-3 md:px-4 md:gap-2 gap-1 lg:text-base md:text-sm text-xs hover:font-medium rounded-[0.25rem] focus:outline-none ${className} `}
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

export { Buttons, Buttons1, Buttons2 };
