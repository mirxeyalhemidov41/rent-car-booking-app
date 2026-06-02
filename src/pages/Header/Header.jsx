import React, { useContext, useEffect, useState } from "react";
import logo from "../../../public/logo.png";
import { NavLink } from "react-router";
import { FaBars, FaShoppingCart, FaTimes, FaUser } from "react-icons/fa";
import { ROUTES } from "../../utils/const";
import { MessageContent } from "../../components/ContextApi/MessageProvider";
import { FaCircleUser } from "react-icons/fa6";

export const Header = () => {
  const { basket } = useContext(MessageContent);
  const [menuOpen, setMenuOpen] = useState(false);
  const token = localStorage.getItem("token");

  return (
    <div className="w-full bg-white fixed top-0 left-0 z-50 shadow-lg">
      <div className="max-w-[1440px] mx-auto pr-4 flex justify-between items-center py-2">
        <img className="w-30" src={logo} alt="logo" />
        <nav className=" hidden lg:flex md:flex items-center gap-x-10">
          <NavLink
            to={ROUTES.HOME}
            className={({ isActive }) =>
              `font-medium duration-200  ${isActive ? "text-blue-600" : "text-gray-700"}  hover:text-blue-600 `
            }
          >
            Ana Səhifə
          </NavLink>
          <NavLink
            to={ROUTES.CARS}
            className={({ isActive }) =>
              `font-medium duration-200  ${isActive ? "text-blue-600" : "text-gray-700"}  hover:text-blue-600 `
            }
          >
            Maşınlar
          </NavLink>
          <NavLink
            to={ROUTES.ABOUTUS}
            className={({ isActive }) =>
              `font-medium duration-200  ${isActive ? "text-blue-600" : "text-gray-700"}  hover:text-blue-600 `
            }
          >
            Haqqımızda
          </NavLink>
          <NavLink
            to={ROUTES.CONTACT}
            className={({ isActive }) =>
              `font-medium duration-200  ${isActive ? "text-blue-600" : "text-gray-700"}  hover:text-blue-600 `
            }
          >
            Əlaqə
          </NavLink>
        </nav>
        <div className="flex items-center gap-x-6">
          <NavLink
            to={ROUTES.BASKET}
            className="relative text-xl text-gray-700"
          >
            <FaShoppingCart />

            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              {basket.length}
            </span>
          </NavLink>

          {token ? (
            <NavLink
              to={ROUTES.PROFILE}
              className={({ isActive }) =>
                `hidden lg:flex items-center gap-2 px-4 h-11 rounded-xl border duration-200 font-medium ${
                  isActive
                    ? "bg-blue-600 border-blue-600 text-white"
                    : "border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600"
                }`
              }
            >
              <FaCircleUser className="text-lg" />

              <span>Profil</span>
            </NavLink>
          ) : (
            <NavLink
              to={ROUTES.LOGIN}
              className="hidden lg:flex items-center gap-2 px-4 h-11 rounded-xl border border-gray-300 hover:border-blue-500 hover:text-blue-600 duration-200 text-gray-700 font-medium"
            >
              <FaUser className="text-sm" />
              Giriş
            </NavLink>
          )}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden md:hidden text-2xl text-gray-700"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="lg:hidden md:hidden bg-white border-t shadow-lg">
          <nav className="flex flex-col p-4 gap-4">
            <NavLink
              to={ROUTES.HOME}
              onClick={() => setMenuOpen(false)}
              className="font-medium text-gray-700 hover:text-blue-600"
            >
              Ana Səhifə
            </NavLink>

            <NavLink
              to={ROUTES.CARS}
              onClick={() => setMenuOpen(false)}
              className="font-medium text-gray-700 hover:text-blue-600"
            >
              Maşınlar
            </NavLink>

            <NavLink
              to={ROUTES.ABOUTUS}
              onClick={() => setMenuOpen(false)}
              className="font-medium text-gray-700 hover:text-blue-600"
            >
              Haqqımızda
            </NavLink>

            <NavLink
              to={ROUTES.CONTACT}
              onClick={() => setMenuOpen(false)}
              className="font-medium text-gray-700 hover:text-blue-600"
            >
              Əlaqə
            </NavLink>

            {token ? (
              <NavLink
                to={ROUTES.PROFILE}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 py-2 text-gray-700"
              >
                <FaCircleUser />
                Profil
              </NavLink>
            ) : (
              <NavLink
                to={ROUTES.LOGIN}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 py-2 text-gray-700"
              >
                <FaUser />
                Giriş
              </NavLink>
            )}
          </nav>
        </div>
      )}
    </div>
  );
};
