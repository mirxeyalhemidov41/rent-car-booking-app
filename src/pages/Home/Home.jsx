import React, { useContext } from "react";
import banner from "../../../public/banner.png";
import mobileBanner from "../../../public/mobileBanner.png";
import Cars from "../../data/CarsArr";
import {
  FaCalendarAlt,
  FaCogs,
  FaGasPump,
  FaShoppingCart,
  FaUserFriends,
} from "react-icons/fa";
import { MessageContent } from "../../components/ContextApi/MessageProvider";
import { CarsFilter } from "../../components/CarsFilter/CarsFilter";
import { IoCarSportOutline, IoSearchSharp } from "react-icons/io5";
import { useNavigate } from "react-router";
import { ROUTES } from "../../utils/const";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-19 ">
      <div className="mt-0 md:mt-20 lg:mt-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="relative overflow-hidden rounded-[40px]">
            <div className="hidden lg:block absolute inset-0">
              <img
                src={banner}
                alt="banner"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/20"></div>
            </div>

            <div className="block lg:hidden absolute inset-0">
              <img
                src={mobileBanner}
                alt="mobile-banner"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/70"></div>
            </div>

            <div className="relative z-10 px-5 sm:px-8 lg:px-12 py-10 sm:py-14 lg:py-16 min-h-[520px] md:min-h-[650px] lg:min-h-[760px] lg:min-h-[760px] flex flex-col justify-between">
              <div className="flex flex-col gap-10">
                <div className="max-w-[680px] pt-2 lg:pt-8">
                  <span
                    data-aos="fade-down"
                    className="inline-flex items-center px-5 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-sm font-medium backdrop-blur-md"
                  >
                    Premium avtomobil icarəsi
                  </span>

                  <h1
                    data-aos="fade-right"
                    data-aos-delay="100"
                    className="mt-7 text-white text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight"
                  >
                    İstədiyiniz maşını
                    <span className="text-blue-500 block mt-2">
                      rahatlıqla seçin
                    </span>
                  </h1>

                  <p
                    data-aos="fade-right"
                    data-aos-delay="200"
                    className="mt-6 text-gray-300 text-base sm:text-lg leading-8 max-w-[560px]"
                  >
                    Premium avtomobillər, sürətli bron sistemi və rahat
                    istifadəçi təcrübəsi ilə istədiyiniz maşını indi seçin.
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="flex flex-col sm:flex-row gap-4 mt-8"
                  >
                    <a
                      href="#cars"
                      className="h-14 px-8 flex justify-center items-center rounded-2xl bg-blue-600 hover:bg-blue-700 hover:scale-105 duration-300 text-white font-semibold"
                    >
                      Maşınlara bax
                    </a>

                    <button
                      onClick={() => navigate(ROUTES.BASKET)}
                      className="h-14 px-8 rounded-2xl border border-white/20 bg-white/10 hover:bg-white/20 hover:border-white/40 hover:scale-105 backdrop-blur-xl duration-300 text-white font-semibold"
                    >
                      İndi bron et
                    </button>
                  </div>
                </div>

                <div
                  data-aos="fade-left"
                  data-aos-delay="400"
                  className="hidden lg:grid grid grid-cols-2 gap-4 sm:gap-5 w-full xl:max-w-[450px]"
                >
                  <div className="rounded-[28px] bg-white/10 backdrop-blur-xl border border-white/10 p-5 sm:p-6">
                    <h2 className="text-white text-3xl sm:text-4xl font-bold">
                      150+
                    </h2>

                    <p className="text-gray-300 mt-2 text-sm sm:text-base leading-6">
                      Premium avtomobil
                    </p>
                  </div>

                  <div className="rounded-[28px] bg-white/10 backdrop-blur-xl border border-white/10 p-5 sm:p-6">
                    <h2 className="text-white text-3xl sm:text-4xl font-bold">
                      5000+
                    </h2>

                    <p className="text-gray-300 mt-2 text-sm sm:text-base leading-6">
                      Məmnun müştəri
                    </p>
                  </div>

                  <div className="rounded-[28px] bg-white/10 backdrop-blur-xl border border-white/10 p-5 sm:p-6">
                    <h2 className="text-white text-3xl sm:text-4xl font-bold">
                      24/7
                    </h2>

                    <p className="text-gray-300 mt-2 text-sm sm:text-base leading-6">
                      Dəstək xidməti
                    </p>
                  </div>

                  <div className="rounded-[28px] bg-white/10 backdrop-blur-xl border border-white/10 p-5 sm:p-6">
                    <h2 className="text-white text-3xl sm:text-4xl font-bold">
                      20+
                    </h2>

                    <p className="text-gray-300 mt-2 text-sm sm:text-base leading-6">
                      Şəhərə xidmət
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div id="cars">
          <CarsFilter />
        </div>

        <div className="py-16">
          <div className="mx-auto" data-aos="fade-up">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">
              Necə işləyir?
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="bg-white flex items-center border border-gray-200 rounded-3xl p-6 shadow-sm hover:shadow-lg duration-300 relative overflow-hidden"
              >
                <div className="flex items-start gap-4">
                  <div className="p-4 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-3xl">
                    <IoSearchSharp />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      Maşını seç
                    </h2>

                    <p className="text-gray-500 mt-2 text-sm leading-6">
                      İstədiyin maşını kataloqdan rahatlıqla seç.
                    </p>
                  </div>
                </div>

                <span className="absolute top-5 right-5 text-4xl font-bold text-blue-500">
                  1
                </span>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm hover:shadow-lg duration-300 relative overflow-hidden"
              >
                <div className="flex items-start gap-4">
                  <div className="p-4 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-3xl">
                    <FaCalendarAlt />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      Tarix seç
                    </h2>

                    <p className="text-gray-500 mt-2 text-sm leading-6">
                      Götürüləcək və qaytarılacaq tarixləri seç.
                    </p>
                  </div>
                </div>

                <span className="absolute top-5 right-5 text-4xl font-bold text-blue-500">
                  2
                </span>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm hover:shadow-lg duration-300 relative overflow-hidden"
              >
                <div className="flex items-start gap-4">
                  <div className="p-4 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-3xl">
                    <FaShoppingCart />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      Sifarişi tamamla
                    </h2>

                    <p className="text-gray-500 mt-2 text-sm leading-6">
                      WhatsApp vasitəsilə sifarişi təsdiqlə.
                    </p>
                  </div>
                </div>

                <span className="absolute top-5 right-5 text-4xl font-bold text-blue-500">
                  3
                </span>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="400"
                className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm hover:shadow-lg duration-300 relative overflow-hidden"
              >
                <div className="flex items-start gap-4">
                  <div className="p-4 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-3xl">
                    <IoCarSportOutline />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      Maşını götür
                    </h2>

                    <p className="text-gray-500 mt-2 text-sm leading-6">
                      Maşını təhvil al və sürüşün həzzini yaşa.
                    </p>
                  </div>
                </div>

                <span className="absolute top-5 right-5 text-4xl font-bold text-blue-500">
                  4
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
