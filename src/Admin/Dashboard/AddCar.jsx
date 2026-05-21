import React from "react";
import {
  FaCar,
  FaGasPump,
  FaCogs,
  FaUserFriends,
  FaImage,
} from "react-icons/fa";

export const AddCar = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-10">
      
      <div className="max-w-5xl mx-auto">
        
        <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-6 sm:p-8 lg:p-10">
          
          <div className="mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Yeni maşın əlavə et
            </h1>

            <p className="text-gray-500 mt-3">
              Maşın məlumatlarını daxil et və siyahıya əlavə et.
            </p>
          </div>

          <form className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">
                Maşın ID
              </label>

              <div className="h-14 border border-gray-200 rounded-2xl px-4 flex items-center gap-3 focus-within:border-blue-500 duration-200">
                
                <FaCar className="text-gray-400" />

                <input
                  type="number"
                  placeholder="ID daxil et"
                  className="w-full outline-none bg-transparent"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">
                Maşın adı
              </label>

              <div className="h-14 border border-gray-200 rounded-2xl px-4 flex items-center gap-3 focus-within:border-blue-500 duration-200">
                
                <FaCar className="text-gray-400" />

                <input
                  type="text"
                  placeholder="Audi RS7"
                  className="w-full outline-none bg-transparent"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">
                Qiymət
              </label>

              <div className="h-14 border border-gray-200 rounded-2xl px-4 flex items-center gap-3 focus-within:border-blue-500 duration-200">
                
                <FaCar className="text-gray-400" />

                <input
                  type="number"
                  placeholder="120"
                  className="w-full outline-none bg-transparent"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">
                Yanacaq növü
              </label>

              <div className="h-14 border border-gray-200 rounded-2xl px-4 flex items-center gap-3 focus-within:border-blue-500 duration-200">
                
                <FaGasPump className="text-gray-400" />

                <select className="w-full outline-none bg-transparent text-gray-700">
                  <option>Benzin</option>
                  <option>Dizel</option>
                  <option>Elektrik</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">
                Sürətlər qutusu
              </label>

              <div className="h-14 border border-gray-200 rounded-2xl px-4 flex items-center gap-3 focus-within:border-blue-500 duration-200">
                
                <FaCogs className="text-gray-400" />

                <select className="w-full outline-none bg-transparent text-gray-700">
                  <option>Avtomat</option>
                  <option>Manual</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">
                Oturacaq sayı
              </label>

              <div className="h-14 border border-gray-200 rounded-2xl px-4 flex items-center gap-3 focus-within:border-blue-500 duration-200">
                
                <FaUserFriends className="text-gray-400" />

                <input
                  type="number"
                  placeholder="5"
                  className="w-full outline-none bg-transparent"
                />
              </div>
            </div>

            <div className="lg:col-span-2">
              
              <label className="text-gray-700 font-medium mb-2 block">
                Maşın şəkli
              </label>

              <div className="border-2 border-dashed border-gray-300 rounded-3xl p-10 bg-gray-50 flex flex-col items-center justify-center text-center hover:border-blue-500 duration-200 cursor-pointer">
                
                <div className="w-20 h-20 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-3xl">
                  <FaImage />
                </div>

                <h2 className="text-xl font-semibold text-gray-800 mt-5">
                  Şəkil seç
                </h2>

                <p className="text-gray-500 mt-2">
                  PNG, JPG və ya WEBP formatı
                </p>

                <button
                  type="button"
                  className="mt-6 px-6 h-12 rounded-2xl bg-blue-600 hover:bg-blue-700 duration-200 text-white font-medium"
                >
                  Fayl seç
                </button>
              </div>
            </div>

            <div className="lg:col-span-2 flex justify-end">
              
              <button
                type="submit"
                className="w-full sm:w-fit px-10 h-14 rounded-2xl bg-blue-600 hover:bg-blue-700 duration-200 text-white font-medium text-lg"
              >
                Maşını əlavə et
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};