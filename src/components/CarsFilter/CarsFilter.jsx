import React, { useContext } from "react";
import Cars from "../../data/CarsArr";
import { MessageContent } from "../../components/ContextApi/MessageProvider";
import {
  FaCogs,
  FaGasPump,
  FaShoppingCart,
  FaUserFriends,
} from "react-icons/fa";

export const CarsFilter = () => {
  const { basket, setBasket } = useContext(MessageContent);

  const handleClick = (e) => {
    const car = Cars.find((c) => c.id === e);

    const exists = basket.find((item) => item.id === e);

    let updated = [];

    if (exists) {
      updated = basket.filter((item) => item.id !== e);
    } else {
      const newCar = {
        ...car,

        dueDate: "",
        returnDate: "",
        totalPrice: 0,
        diffDays: 0,
      };

      updated = [...basket, newCar];
    }

    localStorage.setItem("selectedCars", JSON.stringify(updated));

    setBasket(updated);
  };
  return (
    <div>
      <div className="mt-15">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">
          Populyar maşınlar
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 mt-6">
        {Cars?.map((car) => {
          const existing =
            JSON.parse(localStorage.getItem("selectedCars")) || [];

          const exists = existing.find((item) => item.id === car.id);

          return (
            <div
              key={car.id}
              className="w-full mx-auto  rounded-3xl border border-gray-200 p-5 shadow-sm hover:shadow-lg duration-300"
            >
              <div className="flex justify-center items-center rounded-2xl h-52">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full max-w-[220px] mx:auto h-36 object-contain"
                />
              </div>

              <div className="mt-5">
                <h2 className="text-xl font-bold text-gray-900">{car.name}</h2>

                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mt-4">
                  <span className="flex items-center gap-2">
                    <FaCogs className="text-gray-600" />
                    {car.transmission}
                  </span>

                  <span className="flex items-center gap-2">
                    <FaGasPump className="text-gray-600" />
                    {car.fuel}
                  </span>

                  <span className="flex items-center gap-2">
                    <FaUserFriends className="text-gray-600" />
                    {car.seats}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6">
                  <div>
                    <p className="text-xl font-bold text-gray-900">
                      {car.price} AZN
                    </p>

                    <span className="text-sm text-gray-400">günlük qiymət</span>
                  </div>

                  <button
                    className={`w-full sm:w-auto h-12 px-6 rounded-xl border duration-200 flex items-center justify-center gap-2 font-medium cursor-pointer ${
                      exists
                        ? "bg-blue-600 border-blue-600 text-white"
                        : "bg-white border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                    }`}
                    onClick={() => handleClick(car.id)}
                  >
                    <FaShoppingCart />
                    {exists ? "Əlavə edildi" : "Əlavə et"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
