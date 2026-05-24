import React, { useEffect, useState } from "react";
import {
  FaEdit,
  FaTrash,
  FaGasPump,
  FaCogs,
  FaUserFriends,
} from "react-icons/fa";
import { useNavigate } from "react-router";
import { ROUTES } from "../../../utils/const";
import ButtonEdit from "../../components/ButtonEdit/ButtonEdit";

export const AllCars = () => {
  const [cars, setCars] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const Cars = JSON.parse(localStorage.getItem("adminCar")) || [];
    setCars(Cars);
  }, []);

  const handleAddCar = () => {
    navigate(ROUTES.STATISTICS);
  };

  const handleDelete = (id) => {
    const updated = cars.filter((car) => car.id !== id);

    setCars(updated);

    localStorage.setItem("adminCar", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-10 mt-15 lg:mt-0">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Bütün maşınlar
            </h1>

            <p className="text-gray-500 mt-2">
              Saytdakı bütün maşınları idarə et.
            </p>
          </div>

          <button
            onClick={handleAddCar}
            className="w-full sm:w-fit px-8 h-14 rounded-2xl bg-blue-600 hover:bg-blue-700 duration-200 text-white font-medium"
          >
            Yeni maşın əlavə et
          </button>
        </div>

        <div className="flex flex-col gap-6">
          {cars.map((car) => (
            <div
              key={car.id}
              className="w-full bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg duration-300 p-4 sm:p-6"
            >
              <div className="flex flex-col xl:flex-row gap-6 xl:items-center xl:justify-between">
                <div className="flex flex-col lg:flex-row gap-6 lg:items-start w-full">
                  <div className="w-full lg:w-[320px] h-[220px] rounded-2xl overflow-hidden bg-gray-100 flex-shrink-0">
                    <img
                      src={car.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col gap-3">
                      <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                        {car.name}
                      </h2>

                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="text-3xl font-bold text-blue-600">
                          {car.price} AZN
                        </span>

                        <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium">
                          günlük kirayə
                        </span>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <div className="px-4 h-11 rounded-xl bg-gray-100 flex items-center gap-2 text-gray-700 text-sm">
                        <FaGasPump />
                        {car.fuel}
                      </div>

                      <div className="px-4 h-11 rounded-xl bg-gray-100 flex items-center gap-2 text-gray-700 text-sm">
                        <FaCogs />
                        {car.transmission}
                      </div>

                      <div className="px-4 h-11 rounded-xl bg-gray-100 flex items-center gap-2 text-gray-700 text-sm">
                        <FaUserFriends />
                        {car.seats} nəfər
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row xl:flex-col gap-4 xl:w-[180px]">
                 <ButtonEdit car={car} cars={cars} setCars={setCars} />
                  <button
                    onClick={() => handleDelete(car.id)}
                    className="w-full h-13 rounded-2xl bg-red-500 hover:bg-red-600 duration-200 text-white font-medium flex items-center justify-center gap-3"
                  >
                    <FaTrash />
                    Sil
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
