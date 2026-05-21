import React from "react";
import { NavLink } from "react-router-dom";
import { FaTriangleExclamation } from "react-icons/fa6";
import { ROUTES } from "../../utils/const";

export const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-white rounded-3xl p-8 sm:p-12 shadow-[0_0_30px_rgba(0,0,0,0.08)] text-center">
        <div className="w-28 h-28 mx-auto rounded-full bg-red-100 text-red-500 flex items-center justify-center text-5xl">
          <FaTriangleExclamation />
        </div>

        <h1 className="text-6xl sm:text-7xl font-bold text-gray-900 mt-8">
          404
        </h1>

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-4">
          Səhifə tapılmadı
        </h2>

        <p className="text-gray-500 leading-7 mt-5 max-w-md mx-auto">
          Axtardığınız səhifə mövcud deyil və ya silinib. Ana səhifəyə qayıdaraq
          davam edə bilərsiniz.
        </p>

        <NavLink
          to={ROUTES.HOME}
          className="w-full sm:w-fit mx-auto px-8 h-14 mt-10 rounded-2xl bg-blue-600 hover:bg-blue-700 duration-200 text-white font-medium text-lg flex items-center justify-center"
        >
          Ana səhifəyə qayıt
        </NavLink>
      </div>
    </div>
  );
};
