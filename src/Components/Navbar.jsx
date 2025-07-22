// import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import { IoIosSearch } from "react-icons/io";

function Navbar() {
  

  return (
    <header
      className={`flex flex-col bg-white text-black pt-9 pb-4 px-4 items-start gap-5 fixed top-0 left-0 right-0 z-50 transition-colors shadow-lg duration-300`}
    >
      <div className="flex justify-between items-center self-stretch">
        <div className={`flex flex-row items-center w-full justify-between`}>
          <div className={`flex items-center justify-between shrink-0`}>
            <a href="/">
              <img
                src="/logo1.svg"
                className="hidden md:block"
                alt=""
              />
              <img
                src="/logo.svg"
                className="md:hidden block"
                alt=""
              />
            </a>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex p-2 items-center">
              <IoIosSearch className="h-5 w-5 text-[#1D5ADD]" />
            </div>
            <div className="md:hidden block self-center">
              <Hamburger buttonLabel="Menu">
                <Link to="/" role="menuitem" className="menu-item">
                  Home
                </Link>
                <Link to="/about" role="menuitem" className="menu-item">
                  About
                </Link>
                <Link to="/projects" role="menuitem" className="menu-item">
                  Projects
                </Link>
                <Link to="/portfolio" role="menuitem" className="menu-item">
                  Portfolio
                </Link>
                <Link to="/services" role="menuitem" className="menu-item">
                  Services
                </Link>
              </Hamburger>
            </div>
          </div>
        </div>

        <nav className="hidden md:flex justify-end items-center">
          <ul className="flex justify-between gap-6 items-center text-white p-4">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-white animate-pulse dark:text-white/70 dark:border-white/70 pb-1"
                    : "hover:border-b hover:pb-1 transition duration-200"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-white animate-pulse dark:text-white/70 dark:border-white/70 pb-1"
                    : "hover:border-b hover:pb-1 transition duration-200 "
                }
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-white animate-pulse dark:text-white/70 dark:border-white/70 pb-1"
                    : "hover:border-b hover:pb-1 transition duration-200"
                }
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-white animate-pulse dark:text-white/70 dark:border-white/70 pb-1"
                    : "hover:border-b hover:pb-1 transition duration-200"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
