import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { ROUTES } from "../../utils/const";
import { NavLink } from "react-router";
import logo from "../../../public/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white mt-20">
      <div className="max-w-[1440px] mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold">
              Rent <span className="text-blue-500">a Car</span>
            </h2>

            <p className="text-gray-400 leading-8 mt-5 max-w-[500px]">
              Rahat, təhlükəsiz və sərfəli avtomobil kirayəsi xidməti.
              İstədiyiniz avtomobili seçin, bron edin və sürüşün həzzini
              yaşayın.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-10">
            <div>
              <h3 className="text-lg font-semibold mb-5">Əlaqə</h3>

              <div className="space-y-3 text-gray-400">
                <p>+994 10 512 21 41</p>
                <p>mirxeyalhemidov1@gmail.com</p>
                <p>Bakı, Azərbaycan</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-5">Sosial şəbəkələr</h3>

              <div className="flex items-center gap-4">
                <a
                  href="https://www.instagram.com/mirxeyal_41"
                  target="_blank"
                  className="w-12 h-12 rounded-2xl bg-white/10 hover:bg-blue-600 duration-300 flex items-center justify-center text-xl"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://wa.me/994105122141"
                  target="_blank"
                  className="w-12 h-12 rounded-2xl bg-white/10 hover:bg-blue-600 duration-300 flex items-center justify-center text-xl"
                >
                  <FaWhatsapp />
                </a>

                <a
                  href="https://www.facebook.com/people/Mirx%C9%99yal-H%C9%99midov/pfbid082oUs7C3wsH1YBH3oryaZXn4Ji11efhJ11LauLZm1VfLAcR2TixhJx26LTHySQdBl/?mibextid=wwXIfr&rdid=yv5ZW3KDklgXFHz5&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1FocY5BxS1%2F%3Fmibextid%3DwwXIfr"
                  target="_blank"
                  className="w-12 h-12 rounded-2xl bg-white/10 hover:bg-blue-600 duration-300 flex items-center justify-center text-xl"
                >
                  <FaFacebookF />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6">
          <p className="text-center text-gray-500 text-sm">
            © 2026 Rent a Car. Bütün hüquqlar qorunur.
          </p>
        </div>
      </div>
    </footer>
  );
};
