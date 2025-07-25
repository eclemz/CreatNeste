function Buttons ({ children, icon, className, onClick, onKeyDown }) {
  return (
    <button
      className={`inline-flex justify-center items-center font-inter md:py-3 py-2 px-4 md:gap-2 gap-1 lg:text-base md:text-base text-sm active:scale-95 hover:scale-105 hover:font-medium transition-transform duration-300 rounded-[0.25rem] focus:outline-none ${className} `}
      onClick={onClick}
      onKeyDown={onKeyDown}
      tabIndex={0}
      aria-label={children}
      role="button"
    >
      {children}
      {icon}
    </button>
    
  );
}

function Buttons1 ({ children, icon, className, onClick, onKeyDown }) {
  return (
    <button
      className={`inline-flex justify-center items-center font-medium font-nunito md:gap-2 gap-1 lg:text-base md:text-sm text-xs active:scale-95 hover:scale-105 hover:font-medium transition-transform duration-300 rounded-[4px] focus:outline-none ${className} `}
      onClick={onClick}
      onKeyDown={onKeyDown}
      tabIndex={0}
      aria-label={children}
      role="button"
    >
      {children}
      {icon}
    </button>
    
  );
}

export {Buttons, Buttons1};
