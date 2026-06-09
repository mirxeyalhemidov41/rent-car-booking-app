import React, { useEffect } from "react";
import { FaUser, FaEnvelope, FaLock, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router";
import { ROUTES } from "../../utils/const";
import { Logout } from "../../components/Logout/Logout";

export const Profile = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate(ROUTES.LOGIN);
    }
  }, []);

  const Users = JSON.parse(localStorage.getItem("User"));
  const ProfileId = JSON.parse(localStorage.getItem("ProfileId"));
  const ProfilUsers = Users.find((item) => item.id == ProfileId);

  return (
    <div
      className=" overflow-x: hidden"
      data-aos="fade-up"
      className="min-h-screen  px-4 py-10 flex items-center justify-center"
    >
      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className="w-full mt-20 max-w-2xl bg-white rounded-3xl shadow-[0_0_25px_rgba(0,0,0,0.1)] p-6 sm:p-8"
      >
        <div
          data-aos="fade-down"
          className="flex flex-col items-center text-center"
        >
          <div className="w-28 h-28 rounded-full bg-blue-600 text-white flex items-center justify-center text-4xl font-bold">
            {ProfilUsers.name.charAt(0)}
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mt-5">
            {ProfilUsers.name}
          </h1>

          <p className="text-gray-500 mt-2">Profil məlumatları</p>
        </div>

        <div className="mt-10 space-y-5">
          <div
            data-aos="fade-right"
            data-aos-delay="100"
            className="border border-gray-200 rounded-2xl p-5 flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-lg">
              <FaUser />
            </div>

            <div>
              <p className="text-sm text-gray-400">Ad Soyad</p>

              <h2 className="text-lg font-semibold text-gray-900">
                {ProfilUsers.name}
              </h2>
            </div>
          </div>

          <div
            data-aos="fade-right"
            data-aos-delay="200"
            className="border border-gray-200 rounded-2xl p-5 flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-lg">
              <FaEnvelope />
            </div>

            <div>
              <p className="text-sm text-gray-400">Email</p>

              <h2 className="text-lg font-semibold text-gray-900">
                {ProfilUsers.email}
              </h2>
            </div>
          </div>

          <div
            data-aos="fade-right"
            data-aos-delay="300"
            className="border border-gray-200 rounded-2xl p-5 flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-lg">
              <FaLock />
            </div>

            <div>
              <p className="text-sm text-gray-400">Şifrə</p>

              <h2 className="text-lg font-semibold text-gray-900">
                {ProfilUsers.password}
              </h2>
            </div>
          </div>
        </div>
        <div className="w-full mt-8 lg:pl-10 rounded-2xl bg-red-500 hover:bg-red-600 duration-200 text-white font-medium text-lg text-center">
          <Logout userToken={"token"} selectedCars={"selectedCars"} />
        </div>
      </div>
    </div>
  );
};
