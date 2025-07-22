import React,{ useState, useRef, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

function Hamburger({ children, buttonLabel = "Menu" }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") setOpen(false);
    }
    if (open) document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);
   // Clone children to add onClick that closes menu
  const enhancedChildren = React.Children.map(children, child => {
    if (typeof child === "object" && child !== null && "type" in child) {
      // preserve existing onClick if present
      const prevOnClick = child.props.onClick;
      return React.cloneElement(child, {
        onClick: (e) => {
          if (prevOnClick) prevOnClick(e);
          setOpen(false);
        }
      });
    }
    return child;
  });
  return (
    <div ref={menuRef}>
      <button
        aria-controls="menu-list"
        aria-expanded={open}
        aria-label={buttonLabel}
        onClick={() => setOpen((v) => !v)}
        type="button"
        className="flex items-center p-3 gap-2"
      >
        <span aria-hidden="true"
          className="inline-block text-2xl text-[#1D5ADD] cursor-pointer">
            <GiHamburgerMenu className="h-4 w-4" />
        </span>
      </button>
      {open && (
        <nav 
        id="menu-list" r
        ole="menu"
        className="absolute flex flex-col gap-4 w-[100vw] h-[100vh] top-0 right-0 bg-white text-black px-4 py-28 z-50 ">
            <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            type="button"
            style={{
              position: "absolute",
              top: 16,
              right: 16,
              background: "none",
              border: "none",
              cursor: "pointer"
            }}
          >
            <span aria-hidden="true" className="inline-block text-2xl text-white">
              <IoMdClose />
            </span>
          </button>
          {enhancedChildren}
        </nav>
      )}
    </div>
  );
}
export default Hamburger;