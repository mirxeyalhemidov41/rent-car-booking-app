import React, { useEffect, useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router";
import { ROUTES } from "../../utils/const";

export const Register = () => {
  const [names, setNames] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasssword] = useState("");
  const [authUser, setAuthUser] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate(ROUTES.PROFILE);
    }
  }, []);

  const handleForm = (e) => {
    e.preventDefault();

    const newUser = {
      id: crypto.randomUUID(),
      name: names,
      email: email,
      password: password,
    };

    const updatedUsers = [...authUser, newUser];

    setAuthUser(updatedUsers);

    localStorage.setItem("User", JSON.stringify(updatedUsers));

    setNames("");
    setEmail("");
    setPasssword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-6 sm:p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Qeydiyyat</h1>

          <p className="text-gray-500 mt-3 text-sm sm:text-base">
            Yeni hesab yaradın
          </p>
        </div>

        <form className="mt-8 space-y-5" onSubmit={handleForm}>
          <div>
            <label
              className="text-sm font-medium text-gray-700 block mb-2"
              htmlFor="name"
            >
              Ad Soyad
            </label>

            <div className="flex items-center border border-gray-300 rounded-xl px-4 h-12 bg-white focus-within:border-blue-500 duration-200">
              <FaUser className="text-gray-400" />

              <input
                id="name"
                type="text"
                placeholder="Ad Soyad"
                className="w-full h-full outline-none px-3 text-sm bg-white"
                value={names}
                onChange={(e) => setNames(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label
              className="text-sm font-medium text-gray-700 block mb-2"
              htmlFor="email"
            >
              Email
            </label>

            <div className="flex items-center border border-gray-300 rounded-xl px-4 h-12 bg-white focus-within:border-blue-500 duration-200">
              <FaEnvelope className="text-gray-400" />

              <input
                id="email"
                type="email"
                placeholder="example@gmail.com"
                className="w-full h-full outline-none px-3 text-sm bg-white"
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

            <div className="flex items-center border border-gray-300 rounded-xl px-4 h-12 bg-white focus-within:border-blue-500 duration-200">
              <FaLock className="text-gray-400" />

              <input
                id="password"
                type="password"
                placeholder="********"
                className="w-full h-full outline-none px-3 text-sm bg-white"
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
            Qeydiyyatdan keç
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm sm:text-base">
            Hesabınız var?{" "}
            <NavLink
              to={ROUTES.LOGIN}
              className="text-blue-600 hover:text-blue-700 font-medium duration-200 cursor-pointer"
            >
              Giriş et
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};
