// @ts-nocheck
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import style from './Nav.module..css'


const Nav = () => {
  // set nav responsive
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  // data load from api
  const [headers, setHeaders] = useState([]);
  const url = "navmenu.json";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setHeaders(data));
  }, []);

  const [isSticky, setIsSticky] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [activeMenu, setActiveMenu] = useState(null);
  const handleMenuItemClick = (id) => {
    setActiveMenu(id);
  };

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 z-50 fixed_header ${isSticky ? 'sticky' : ''}`}>
        <div className="max-w-9xl mx-auto sm:px-6 lg:px-0">
          <div className="flex px-[10%] items-center justify-between py-4 gap-2">
            {/* logo section */}
            <div
              className="flex-shrink-0">
              <Link
                to="/"
                className="md:text-3xl text-2xl font-bold text-design  flex items-center"
              >
                <p>Toufiqul Islam</p>
              </Link>
            </div>
            {/* link for desktop view */}
            <div className="hidden md:block">
              <div
                className="ml-4 flex items-center md:ml-6">
                {headers.map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    className={`px-3 py-2  font-medium  transition duration-300 ${activeMenu === link.id ? "text-green-300 text-[1.5rem]" : "text-white hover:text-cyan-400 text-xl"
                      }`}
                    onClick={() => handleMenuItemClick(link.id)}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            <div className=" flex md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-200 focus:outline-none focus:bg-cyan-500 focus:text-white transition duration-150 ease-in-out"
                aria-label="Main menu"
                aria-expanded="false"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="w-6 h-6"></FaTimes>
                ) : (
                  <FaBars className="w-6 h-6"></FaBars>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* mobile menu */}

        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-700 border-b border-cyan-400 h-auto">
            <div

              className="px-[10%] pt-2 pb-3">
              {headers.map((link) => (
                <NavLink
                  key={link.id}
                  to={link.url}
                  className={({ isActive }) =>
                    isActive
                      ? "block  py-2 text-cyan-400 transition duration-300 font-medium"
                      : "block  py-2 text-white hover:text-cyan-400 font-medium transition duration-300"
                  }
                  onClick={closeMobileMenu}
                >
                  {link.name}
                </NavLink>
              ))}

            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Nav;