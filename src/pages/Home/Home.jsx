import React, { useContext } from "react";
import banner from "../../../public/banner.png";
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
import { BookingForm } from "../../components/BookingForm/BookingForm";
import { IoCarSportOutline, IoSearchSharp } from "react-icons/io5";
import { useNavigate } from "react-router";

export const Home = () => {
  
  return (
    <div>
      <section className="pt-19">
        <div
          className="h-150 bg-center bg-no-repeat bg-cover py-30 px-10"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <h1 className="text-5xl font-medium text-white">
            Arzuladığın maşını{" "}
            <span className="py-2 block text-blue-800">kirayə götür!</span>
          </h1>
          <p className="py-5 text-white font-medium text-xl">
            Rahat, təhlükəsiz və sərfəli{" "}
            <span className="block">kirayə imkanı</span>
          </p>
        </div>

        <BookingForm />
      </section>

      <section>

        <CarsFilter />

        <div className="py-16">
          <div className="mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">
              Necə işləyir?
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
              <div className="bg-white flex items-center border border-gray-200 rounded-3xl p-6 shadow-sm hover:shadow-lg duration-300 relative overflow-hidden">
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

              <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm hover:shadow-lg duration-300 relative overflow-hidden">
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

              <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm hover:shadow-lg duration-300 relative overflow-hidden">
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

              <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm hover:shadow-lg duration-300 relative overflow-hidden">
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
