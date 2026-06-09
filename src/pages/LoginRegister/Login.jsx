import React, { useEffect, useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { data, NavLink, useNavigate } from "react-router";
import { ROUTES } from "../../utils/const";
import { authUsers } from "../../data/authUsers/authUsers";
import { toast } from "react-toastify";

export const Login = () => {
  const [names, setNames] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasssword] = useState("");
  const [authUser, setAuthUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("User")) || [];
    setAuthUser(data);
  }, []);

  authUser.map((data) => {
    if (email == data.email && password == data.password) {
      localStorage.setItem("ProfileId", JSON.stringify(data.id));
    }
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    const admin = localStorage.getItem("admin");

    if (token) {
      navigate(ROUTES.PROFILE);
    } else {
      navigate(ROUTES.LOGIN);
    }
    if (admin) {
      navigate(ROUTES.STATISTICS);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email == authUsers.email && password == authUsers.password) {
      localStorage.setItem("admin", JSON.stringify("admin"));
      navigate(ROUTES.STATISTICS);
    }
    const admin = localStorage.getItem("admin");

    authUser.map((data) => {
      if (email == data.email && password == data.password) {
        localStorage.setItem("token", JSON.stringify("usertoken"));
      }
    });
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      navigate(ROUTES.HOME);
      toast.success("Qeydiyyatdan uğurla keçdiniz 🎉");
    } else if (admin) {
      navigate(ROUTES.STATISTICS);
        toast.success("Qeydiyyatdan uğurla keçdiniz 🎉");
    } else if (!token || !admin) {
      toast.error("Qeydiyyat zamanı xəta baş verdi!");
    }

    setEmail("");
    setPasssword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-6 sm:p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Xoş gəlmisiniz</h1>

          <p className="text-gray-500 mt-3 text-sm sm:text-base">
            Hesabınıza daxil olun
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label
              className="text-sm font-medium text-gray-700 block mb-2"
              htmlFor="email"
            >
              Email
            </label>

            <div className="flex items-center border border-gray-300 rounded-xl px-4 h-12 focus-within:border-blue-500 duration-200">
              <FaEnvelope className="text-gray-400" />

              <input
                id="email"
                type="email"
                placeholder="example@gmail.com"
                className="w-full h-full outline-none px-3 text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label
              className="text-sm font-medium text-gray-700 block mb-2"
              htmlFor="password"
            >
              Şifrə
            </label>

            <div className="flex items-center border border-gray-300 rounded-xl px-4 h-12 focus-within:border-blue-500 duration-200">
              <FaLock className="text-gray-400" />

              <input
                id="password"
                type="password"
                placeholder="********"
                className="w-full h-full outline-none px-3 text-sm"
                value={password}
                onChange={(e) => setPasssword(e.target.value)}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full h-12 rounded-xl bg-blue-600 hover:bg-blue-700 duration-200 text-white font-medium text-lg cursor-pointer"
          >
            Daxil ol
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm sm:text-base">
            Hesabınız yoxdur?
            <NavLink
              to={ROUTES.REGISTER}
              className="text-blue-600 hover:text-blue-700 font-medium duration-200 cursor-pointer"
            >
              Qeydiyyatdan keç
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};
