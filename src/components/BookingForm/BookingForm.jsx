import React, { useState } from "react";
import Cars from "../../data/CarsArr";

export const BookingForm = ({
  name,
  setName,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  handleSearch,
  showAllCars,
}) => {
  return (
    <div>
      <div data-aos="fade-up" className="mt-12 lg:mt-16">
        <div className="w-full rounded-[36px] bg-white/95 backdrop-blur-2xl bg-white border border-gray-200 shadow-sm p-5 sm:p-6 lg:p-7">
          <form
            onSubmit={handleSearch}
            className="my-3 py-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-10"
          >
            <div className="flex flex-col gap-2">
              <label className="text-lg text-gray-500 font-medium">
                Maşın adı:
              </label>
              <div className="h-16 rounded-2xl border border-gray-200 bg-white px-5 flex items-center shadow-sm">
                <input
                  type="text"
                  placeholder="Maşın adı yazın"
                  className="w-full outline-none bg-transparent text-gray-800 placeholder:text-gray-400"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value.trim().toLocaleLowerCase())
                  }
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-lg text-gray-500 font-medium">
                Minimum qiymət:
              </label>
              <div className="h-16 rounded-2xl border border-gray-200 bg-white px-5 flex items-center shadow-sm">
                <input
                  min={0}
                  type="number"
                  placeholder="Minimum qiymət"
                  className="w-full outline-none bg-transparent text-gray-800 placeholder:text-gray-400"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-lg text-gray-500 font-medium">
                Maksimum qiymət:
              </label>
              <div className="h-16 rounded-2xl border border-gray-200 bg-white px-5 flex items-center shadow-sm">
                <input
                  min={0}
                  type="number"
                  placeholder="Maksimum qiymət"
                  className="w-full outline-none bg-transparent text-gray-800 placeholder:text-gray-400"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-end gap-3">
              {!name || !maxPrice || !minPrice ? (
                <button
                  disabled
                  className="h-16 flex-1 rounded-2xl bg-blue-600 hover:bg-blue-700 duration-200 text-white font-semibold text-lg shadow-lg disabled:cursor-not-allowed shadow-blue-600/30"
                >
                  Axtar
                </button>
              ) : (
                <button
                  type="submit"
                  className="h-16 flex-1 rounded-2xl bg-blue-600 hover:bg-blue-700 duration-200 text-white font-semibold text-lg cursor-pointer shadow-lg shadow-blue-600/30"
                >
                  Axtar
                </button>
              )}

              <button
                type="button"
                onClick={showAllCars}
                className="h-16 flex-1 rounded-2xl border border-gray-200 bg-white text-gray-700 font-semibold text-lg hover:bg-gray-50 duration-200 shadow-sm cursor-pointer"
              >
                Bütün maşınlar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
