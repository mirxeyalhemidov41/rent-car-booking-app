import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { ROUTES } from "../../utils/const";
import { NavLink } from "react-router";
import logo from "../../../public/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white mt-20">
      <div className="max-w-[1440px] mx-auto px-4 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h1 className="text-3xl font-bold">Rent a Car</h1>

            <p className="text-gray-400 leading-7 mt-5">
              Rahat, təhlükəsiz və sərfəli avtomobil kirayəsi xidməti. İstədiyin
              maşını seç və dərhal sifariş et.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-5">Səhifələr</h2>

            <ul className="space-y-4 text-gray-400">
              <li>
                <NavLink
                  to={ROUTES.HOME}
                  className="hover:text-white duration-200"
                >
                  Ana səhifə
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={ROUTES.CARS}
                  className="hover:text-white duration-200"
                >
                  Maşınlar
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={ROUTES.BASKET}
                  className="hover:text-white duration-200"
                >
                  Səbət
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={ROUTES.PROFILE}
                  className="hover:text-white duration-200"
                >
                  Profil
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-5">Əlaqə</h2>

            <div className="space-y-4 text-gray-400">
              <p>+994 10 512 21 41</p>

              <p>mirxeyalhemidov1@gmail.com</p>

              <p>Bakı, Azərbaycan</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-5">Sosial şəbəkələr</h2>

            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/mirxeyal_41?igsh=NmNzbjB1M2VlYXMw&utm_source=qr"
                className="w-12 h-12 rounded-2xl bg-white/10 hover:bg-blue-600 duration-200 flex items-center justify-center text-xl"
                target="_blank"
              >
                <FaInstagram />
              </a>

              <a
                href={`https://wa.me/994105122141?text=`}
                className="w-12 h-12 rounded-2xl bg-white/10 hover:bg-blue-600 duration-200 flex items-center justify-center text-xl"
                target="_blank"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://www.facebook.com/share/1FocY5BxS1/?mibextid=wwXIfr"
                className="w-12 h-12 rounded-2xl bg-white/10 hover:bg-blue-600 duration-200 flex items-center justify-center text-xl"
                target="_blank"
              >
                <FaFacebookF/>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-gray-500 text-sm text-center">
            © 2026 Rent a Car. Bütün hüquqlar qorunur.
          </p>
        </div>
      </div>
    </footer>
  );
};
