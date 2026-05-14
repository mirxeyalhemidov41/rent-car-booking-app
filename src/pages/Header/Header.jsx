import React, { useContext } from "react";
import logo from "../../../public/logo.png";
import { NavLink } from "react-router";
import { FaShoppingCart } from "react-icons/fa";
import { ROUTES } from "../../utils/const";
import { MessageContent } from "../../components/Mesage/MessageProvider";

export const Header = () => {
  const { basket } = useContext(MessageContent)

  return (
    <div className="flex justify-between items-center py-2">
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
      </nav>
      <div className="flex items-center gap-x-6">
        <NavLink to={ROUTES.BASKET} className="relative text-xl text-gray-700">
          <FaShoppingCart />

          <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
            {basket.length}
          </span>
        </NavLink>

        <div>
          <button className="cursor-pointer">Daxil ol</button>
        </div>
      </div>
    </div>
  );
};
