import React from "react";
import { FaCogs, FaGasPump, FaTimes, FaUserFriends } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export const Basget = () => {
  const [basket, setBasket] = React.useState([]);

  React.useEffect(() => {
    const data = JSON.parse(localStorage.getItem("selectedCars")) || [];
    setBasket(data);
  }, []);

  const HandleClick = (e) => {
    const data = JSON.parse(localStorage.getItem("selectedCars") || []);
    const exists = data.find((item) => item.id === e);
    const updated = data.filter((item) => item.id !== e);
    localStorage.setItem("selectedCars",JSON.stringify(updated));
    setBasket(updated);
};

  return (
    <div>
      <div className="mt-15">
        <h1 className="text-gray-900 font-medium text-2xl">Səbətə</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {basket?.map((car) => (
          <div
            key={car.id}
            className="bg-white rounded-2xl border border-gray-200 p-4 w-[300px] shadow-sm hover:shadow-md transition"
          >
            <div className="flex justify-center mb-4">
              <img
                src={car.image}
                alt="Audi A6"
                className="h-32 object-contain"
              />
            </div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {car.name}
            </h2>
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="flex items-center gap-2 text-gray-500">
                <FaCogs className="text-gray-600" /> {car.transmission}
              </span>
              <span className="flex items-center gap-2 text-gray-500">
                <FaGasPump className="text-gray-600" /> {car.fuel}
              </span>
              <span className="flex items-center gap-2 text-gray-500">
                <FaUserFriends className="text-gray-600" /> {car.seats}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold text-gray-800">
                {car.price} AZN
                <span className="text-gray-400 text-sm">/ gün</span>
              </p>

              <button
                className="border border-blue-500 text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition flex items-center justify-center"
                onClick={() => HandleClick(car.id)}
              >
                <MdDelete />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
