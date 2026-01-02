import { NavLink, Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import { IoIosSearch } from "react-icons/io";
import { Buttons } from "./Buttons";
import { navLinks } from "../Data/Data";

function Navbar() {
  const handleEmailClick = () => {
    window.location.href =
      "mailto:creatneste@gmail.com?subject=Let's%20Work%20Together";
  };
  return (
    <header
      className={`flex flex-col md:flex-row bg-white text-black pt-9 pb-4 px-4 md:py-4 md:px-10 md:justify-between md:items-center md:self-stretch items-start md:gap-0 gap-5 fixed top-8 z-50 w-screen oerflow-x-hidden shadow-lg duration-300`}
    >
      {/* For Mobile */}
      <div className=" md:hidden flex justify-between items-center w-full ">
        <div className={`flex items-center justify-between shrink-0`}>
          <NavLink to="/">
            <img src="/logo_special.svg" className="md:hidden block" alt="" />
          </NavLink>
        </div>
        <div className="flex items-center gap-2">
          <div className=" self-center">
            <Hamburger buttonLabel="Menu">
              <ul className="mt-10">
                {navLinks.map((link) => (
                  <li key={link.name} className="menu-item">
                    <NavLink
                      to={link.to}
                      role="menuitem"
                      className={({ isActive }) =>
                        isActive
                          ? "border-b-2 w-full flex justify-center border-[#242424] self-stretch pb-1 font-medium"
                          : "font-inter"
                      }
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <Buttons>Contact Us</Buttons>
            </Hamburger>
          </div>
        </div>
      </div>

      {/* For Tablet & Desktop */}
      <nav className="hidden md:flex md:flex-row bg-white text-black md:py-4 md:px-10  lg:pt-8 lg:pb-4 lg:px-14 md:justify-between md:items-center md:self-stretch items-start fixed top-8 left-0 right-0 z-50 shadow-lg duration-300">
        <div className="lg:w-[217px] md:w-[120px] h-9 md:h-4 flex items-center">
          <NavLink to="/">
            <img src="/logo_special.svg" alt="Logo" className="h-full w-auto" />
          </NavLink>
        </div>

        <ul className="flex gap-6 items-center text-black">
          {navLinks.map((link) => (
            <li key={link.name} className="nav-item ">
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? "relative after:content-[''] font-inter  after:absolute whitespace-nowrap after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[120%] after:h-[2px] after:bg-[#123787] pb-1 font-semibold"
                    : "hover:text-[#242424]/50 hover:scale-105 font-inter font-normal text-[#242424] text-base whitespace-nowrap transition duration-200"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-5">
          {/* <div className="flex items-center gap-2 p-3">
            <IoIosSearch className="md:h-5 md:w-5 lg:h-6 lg:w-6 text-[#1D5ADD]" />
          </div> */}
          <Buttons onClick={handleEmailClick} className={`whitespace-nowrap`}>
            Contact Us
          </Buttons>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
