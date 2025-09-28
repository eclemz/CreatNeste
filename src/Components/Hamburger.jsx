import React, { useState, useRef, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Hamburger({ children, buttonLabel = "Menu" }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") setOpen(false);
    }
    if (open) document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  // Clone children to add onClick that closes menu
  const enhancedChildren = React.Children.map(children, (child) => {
    if (typeof child === "object" && child !== null && "type" in child) {
      // preserve existing onClick if present
      const prevOnClick = child.props.onClick;
      return React.cloneElement(child, {
        onClick: (e) => {
          if (prevOnClick) prevOnClick(e);
          setOpen(false);
        },
      });
    }
    return child;
  });
  return (
    <div ref={menuRef} className="flex flex-col items-start gap-4">
      <button
        aria-controls="menu-list"
        aria-expanded={open}
        aria-label={buttonLabel}
        onClick={() => setOpen((v) => !v)}
        type="button"
        className="flex items-center p-3 gap-2"
      >
        <span
          aria-hidden="true"
          className="inline-block text-2xl text-[#1D5ADD] cursor-pointer"
        >
          <GiHamburgerMenu className="h-5 w-5" />
        </span>
      </button>
      {open && (
        <div
          className="fixed inset-0 bg-black/70 z-50"
          onClick={() => setOpen(false)}
        >
          <nav
            id="menu-list"
            role="menu"
            onClick={(e) => e.stopPropagation()}
            className="absolute flex flex-col gap-6 text-sm items-center justify-center self-stretch bg-[#FFF] w-[100vw] h-auto top-0 right-0 text-[#242424] p-8 z-50 "
          >
            {enhancedChildren}
          </nav>
        </div>
      )}
    </div>
  );
}
export default Hamburger;
