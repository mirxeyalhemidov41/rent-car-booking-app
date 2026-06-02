import React from "react";
import { FaCarSide, FaHeadset, FaShieldAlt, FaUsers } from "react-icons/fa";
import ChevroletCamaro from "../../../public/ChevroletCamaro.jpg";
import BMW4 from "../../../public/BMW4.jpg";

export const AboutUs = () => {
  return (
    <div className="bg-gray-50 mt-19 min-h-screen">
      <section
        data-aos="fade-in"
        className="relative h-[500px] overflow-hidden"
      >
        <img
          src={ChevroletCamaro}
          alt="ChevroletCamaro"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55"></div>

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div data-aos="fade-up" data-aos-delay="200" className="max-w-2xl">
              <span className="px-5 py-2 rounded-full bg-blue-600 text-white text-sm font-medium">
                Haqqımızda
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-6 leading-tight">
                Premium avtomobil icarəsi xidməti
              </h1>

              <p className="text-gray-200 text-lg mt-6 leading-8">
                Rahat, təhlükəsiz və premium avtomobil icarəsi təcrübəsini sizin
                üçün təqdim edirik.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div data-aos="fade-right">
            <div className="px-4">
              <span className="text-blue-600 font-semibold text-lg">
                Biz kimik?
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4 leading-tight">
                Etibarlı və sürətli avtomobil icarəsi xidməti
              </h2>

              <p className="text-gray-500 leading-8 mt-5 text-base sm:text-lg">
                Geniş avtomobil seçimimiz gündəlik, biznes və xüsusi səfərlər
                üçün uyğun həllər təqdim edir. Hər bir avtomobil müasir
                standartlara uyğun şəkildə hazırlanır və tam hazır vəziyyətdə
                təqdim olunur.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-5 mt-10">
              <div
                data-aos="zoom-in"
                data-aos-delay="100"
                className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100"
              >
                <h3 className="text-3xl font-bold text-blue-600">500+</h3>

                <p className="text-gray-500 mt-2">Avtomobil</p>
              </div>

              <div
                data-aos="zoom-in"
                data-aos-delay="200"
                className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100"
              >
                <h3 className="text-3xl font-bold text-blue-600">10K+</h3>

                <p className="text-gray-500 mt-2">Müştəri</p>
              </div>

              <div
                data-aos="zoom-in"
                data-aos-delay="300"
                className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100"
              >
                <h3 className="text-3xl font-bold text-blue-600">24/7</h3>

                <p className="text-gray-500 mt-2">Dəstək</p>
              </div>
            </div>
          </div>

          <div data-aos="fade-left" data-aos-delay="150" className="relative">
            <img
              src={BMW4}
              alt="BMW4"
              className="w-full h-[550px] object-cover rounded-[40px]"
            />

            <div className="absolute bottom-6 left-6 bg-white rounded-3xl p-6 shadow-xl max-w-[280px]">
              <h3 className="text-2xl font-bold text-gray-900">
                8+ illik təcrübə
              </h3>

              <p className="text-gray-500 mt-3 leading-7">
                Azərbaycanda premium rent a car xidməti təqdim edirik.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-20">
        <div className="max-w-7xl mx-auto">
          <div data-aos="fade-up" className="text-center mb-14">
            <span className="text-blue-600 font-semibold">Üstünlüklərimiz</span>

            <h2 className="text-4xl font-bold text-gray-900 mt-4">
              Niyə bizi seçməlisiniz?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm hover:-translate-y-2 transition duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-2xl">
                <FaCarSide />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-6">
                Premium maşınlar
              </h3>

              <p className="text-gray-500 leading-7 mt-4">
                Müasir və komfortlu avtomobil parkı.
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm hover:-translate-y-2 transition duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-2xl">
                <FaShieldAlt />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-6">
                Təhlükəsizlik
              </h3>

              <p className="text-gray-500 leading-7 mt-4">
                Bütün maşınlar texniki baxışdan keçirilir.
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm hover:-translate-y-2 transition duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-2xl">
                <FaHeadset />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-6">
                24/7 dəstək
              </h3>

              <p className="text-gray-500 leading-7 mt-4">
                İstənilən vaxt sizə kömək etməyə hazırıq.
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm hover:-translate-y-2 transition duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-2xl">
                <FaUsers />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-6">
                Minlərlə müştəri
              </h3>

              <p className="text-gray-500 leading-7 mt-4">
                Müştəri məmnuniyyəti bizim prioritetimizdir.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
