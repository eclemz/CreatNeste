import { NavLink, Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import { IoIosSearch } from "react-icons/io";
import { Buttons } from "./Buttons";

function Navbar() {
  return (
    <header
      className={`flex flex-col md:flex-row bg-white text-black pt-9 pb-4 px-4 md:py-4 md:px-10 md:justify-between md:items-center md:self-stretch items-start md:gap-0 gap-5 fixed top-0 left-0 right-0 z-50 shadow-lg duration-300`}
    >
      {/* For Mobile */}
      <div className=" md:hidden flex justify-between items-center self-stretch">
        <div className={`flex flex-row items-center w-full justify-between`}>
          <div className={`flex items-center justify-between shrink-0`}>
            <NavLink to="/">
              <img src="/logo.svg" className="md:hidden block" alt="" />
            </NavLink>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex p-2 items-center">
              <IoIosSearch className="h-5 w-5 text-[#1D5ADD]" />
            </div>
            <div className=" self-center">
              <Hamburger buttonLabel="Menu">
                <ul className="">
                  <li className="menu-item">
                    <NavLink
                      to="/about"
                      role="menuitem"
                      className={({ isActive }) =>
                        isActive
                          ? "border-b-2 w-full flex justify-center border-[#242424] self-stretch pb-1 font-medium"
                          : "font-inter"
                      }
                    >
                      About
                    </NavLink>
                  </li>

                  <li className="menu-item">
                    <NavLink
                      to="/services"
                      role="menuitem"
                      className={({ isActive }) =>
                        isActive
                          ? "border-b-2 w-full flex justify-center border-[#242424] pb-1 font-medium "
                          : ""
                      }
                    >
                      Services
                    </NavLink>
                  </li>

                  <li className="menu-item">
                    <NavLink
                      to="/portfolio"
                      role="menuitem"
                      className={({ isActive }) =>
                        isActive
                          ? "border-b-2 w-full flex justify-center border-[#242424] pb-1 font-medium "
                          : ""
                      }
                    >
                      Portfolio
                    </NavLink>
                  </li>

                  <li className="menu-item">
                    <a
                      href="/portfolio"
                      role="menuitem"
                      className={({ isActive }) =>
                        isActive
                          ? "border-b-2 w-full flex justify-center border-[#242424] pb-1 font-medium "
                          : ""
                      }
                    >
                      Blog
                    </a>
                  </li>
                </ul>
                <Buttons
                  className={`bg-[#1D5ADD] self-stretch text-white font-normal`}
                >
                  <span className=" self-stretch">Contact Us</span>
                </Buttons>
              </Hamburger>
            </div>
          </div>
        </div>
      </div>

      {/* For Table & Desktop */}
      <nav className="hidden md:flex md:flex-row bg-white text-black md:py-4 md:px-10  lg:pt-8 lg:pb-4 lg:px-14 md:justify-between md:items-center md:self-stretch items-start fixed top-0 left-0 right-0 z-50 shadow-lg duration-300">
        <div className="w-[120px] h-[32px] flex items-center">
  <NavLink to="/">
    <img src="/logo1.svg" alt="Logo" className="h-full w-auto" />
  </NavLink>
</div>

        <ul className="flex gap-6 items-center text-black">
          <li className="nav-item ">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "relative after:content-[''] font-inter  after:absolute whitespace-nowrap after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[120%] after:h-[2px] after:bg-[#123787] pb-1 font-semibold"
                  : "hover:text-[#242424]/50 hover:scale-105 font-inter font-normal text-[#242424] text-base whitespace-nowrap transition duration-200"
              }
            >
              About us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "relative after:content-[''] font-inter  after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[120%] after:h-[2px] after:bg-[#123787] pb-1 font-semibold"
                  : "hover:text-[#242424]/50 hover:scale-105 font-inter font-normal text-[#242424] text-base transition duration-200"
              }
            >
              Services
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                isActive
                  ? "relative after:content-[''] font-inter after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[120%] after:h-[2px] after:bg-[#123787] pb-1 font-semibold"
                  : "hover:text-[#242424]/50 hover:scale-105 font-inter font-normal text-[#242424] text-base transition duration-200"
              }
            >
              Portfolio
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                isActive
                  ? "relative after:content-[''] font-inter after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[120%] after:h-[2px] after:bg-[#123787] pb-1 font-semibold"
                  : "hover:text-[#242424]/50 hover:scale-105 font-inter font-normal text-[#242424] text-base transition duration-200"
              }
            >
              FAQs
            </NavLink>
          </li>
        </ul>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2 p-3">
            <IoIosSearch className="md:h-5 md:w-5 lg:h-6 lg:w-6 text-[#1D5ADD]" />
          </div>
          <Buttons
            className={`bg-[#1D5ADD] md:py-3 px-4 py-2 h-11 whitespace-nowrap text-white font-inter`}
          >
            Contact Us
          </Buttons>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
