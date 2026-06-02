import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaCar, FaPlus, FaBars, FaTimes, FaSignOutAlt } from "react-icons/fa";
import { ADMIN_ROUTES } from "../utils/const";
import { Logout } from "../components/Logout/Logout";

export const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="flex">
      <div className="hidden lg:flex flex-col w-[280px] min-h-screen bg-white border-r border-gray-200 shadow-sm p-6 sticky top-0">
        <div>
          <h1 className="text-3xl font-bold text-blue-600">Admin Panel</h1>

          <p className="text-gray-400 mt-2">Rent a Car idarəetməsi</p>
        </div>

        <ul className="mt-12 flex flex-col gap-4">
          <li>
            <NavLink
              to={ADMIN_ROUTES.ADDCAR}
              className={({ isActive }) =>
                `h-14 px-5 rounded-2xl flex items-center gap-4 text-gray-700 hover:bg-blue-600 hover:text-white duration-200 font-medium ${isActive ? "bg-blue-600 text-white" : "bg-white"}`
              }
            >
              <FaPlus />
              Maşın əlavə et
            </NavLink>
          </li>

          <li>
            <NavLink
              to={ADMIN_ROUTES.ALLCARS}
              className={({ isActive }) =>
                `h-14 px-5 rounded-2xl flex items-center gap-4 text-gray-700 hover:bg-blue-600 hover:text-white duration-200 font-medium ${isActive ? "bg-blue-600 text-white" : "bg-white"}`
              }
            >
              <FaCar />
              Bütün maşınlar
            </NavLink>
          </li>

          <li>
            <div className=" px-5 rounded-2xl text-red-500 hover:bg-red-500 hover:text-white duration-200 font-medium">
              <Logout adminToken={"admin"} />
            </div>
          </li>
        </ul>
      </div>

      <div className="lg:hidden fixed top-0 left-0 w-full h-18 bg-white border-b border-gray-200 shadow-sm px-5 flex items-center justify-between z-50">
        <h1 className="text-2xl font-bold text-blue-600">Admin</h1>

        <button
          className="text-3xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {!menuOpen && <FaBars />}
        </button>
      </div>
      {menuOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 bg-black/40 z-40"
            onClick={() => setMenuOpen(false)}
          />

          <div className="lg:hidden fixed top-0 right-0 w-full h-screen bg-white shadow-xl z-50 p-6">
            <div className="flex items-center justify-between mb-10">
              <button onClick={() => setMenuOpen(false)} className="text-2xl">
                <FaTimes />
              </button>
            </div>

            <ul className="flex flex-col gap-4">
              <li>
                <NavLink
                  to={ADMIN_ROUTES.ADDCAR}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `h-14 px-5 rounded-2xl flex items-center gap-4 text-gray-700 hover:bg-blue-600 hover:text-white duration-200 font-medium ${
                      isActive ? "bg-blue-600 text-white" : "bg-white"
                    }`
                  }
                >
                  <FaPlus />
                  Maşın əlavə et
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={ADMIN_ROUTES.ALLCARS}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `h-14 px-5 rounded-2xl flex items-center gap-4 text-gray-700 hover:bg-blue-600 hover:text-white duration-200 font-medium ${
                      isActive ? "bg-blue-600 text-white" : "bg-white"
                    }`
                  }
                >
                  <FaCar />
                  Bütün maşınlar
                </NavLink>
              </li>

              <li>
                <div className="px-5 flex justify-start rounded-2xl text-red-500 hover:bg-red-500 hover:text-white duration-200 font-medium">
                  <Logout adminToken={"admin"} />
                </div>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};
