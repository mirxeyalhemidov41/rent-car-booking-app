import React, { useContext, useEffect, useState } from "react";
import { BookingForm } from "../../components/BookingForm/BookingForm";
import {
  FaCalendarAlt,
  FaCarSide,
  FaCogs,
  FaGasPump,
  FaShoppingCart,
  FaUserFriends,
} from "react-icons/fa";
import { MessageContent } from "../../components/ContextApi/MessageProvider";
import Cars from "../../data/CarsArr";
import { toast } from "react-toastify";

export const AllCars = () => {
  const { basket, setBasket } = useContext(MessageContent);

  const token = localStorage.getItem("token");

  const [name, setName] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [filteredCars, setFilteredCars] = useState(Cars);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    if (!name && !minPrice && !maxPrice) {
      toast.error("Zəhmət olmasa bütün xanaları doldurun!");
      return;
    }
    if (Number(minPrice) > Number(maxPrice)) {
      toast.error("Minimum qiymət maksimum qiymətdən böyük ola bilməz");
      return;
    }

    const result = Cars.filter((car) => {
      const nameMatch = car.name.toLowerCase().includes(name.toLowerCase());

      const priceMatch =
        car.price >= Number(minPrice || 0) &&
        car.price <= Number(maxPrice || Infinity);

      return nameMatch && priceMatch;
    });

    setFilteredCars(result);
  };
  const handleClick = (id) => {
    if (!token) {
      toast.error("Davam etmək üçün giriş edin və ya qeydiyyatdan keçin.");
      return;
    }

    const car = Cars.find((c) => c.id === id);

    const exists = basket.find((item) => item.id === id);

    let updated = [];

    if (exists) {
      updated = basket.filter((item) => item.id !== id);
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
    <div className="py-10 mt-20 min-h-screen">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Bütün maşınlar</h1>

            <p className="text-gray-500 mt-2">
              Premium avtomobil kolleksiyamız
            </p>
          </div>

          <span className="text-gray-500 text-sm">
            {filteredCars.length} maşın tapıldı
          </span>
        </div>

        <div className="mb-10">
          <BookingForm
            name={name}
            setName={setName}
            minPrice={minPrice}
            setMinPrice={setMinPrice}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            handleSearch={handleSearch}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 mt-6">
          {loading ? (
            <div className="col-span-full flex justify-center items-center py-20">
              <h2 className="text-2xl font-semibold text-gray-600">
                Maşınlar yüklənir...
              </h2>
            </div>
          ) : filteredCars.length === 0 ? (
            <div className="col-span-full text-center py-20">
              <h2 className="text-3xl font-bold text-gray-800">
                Maşın tapılmadı
              </h2>

              <p className="text-gray-500 mt-3">
                Axtarış kriteriyalarınızı dəyişərək yenidən yoxlayın.
              </p>

              <button
                onClick={showAllCars}
                className="mt-6 px-6 h-12 rounded-xl bg-blue-600 text-white hover:bg-blue-700 duration-200"
              >
                Bütün maşınları göstər
              </button>
            </div>
          ) : (
            filteredCars?.map((car, index) => {
              const exists = basket.find((item) => item.id === car.id);

              return (
                <div
                  data-aos="fade-up"
                  data-aos-delay={(index % 4) * 100}
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
                    <h2 className="text-xl font-bold text-gray-900">
                      {car.name}
                    </h2>

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
                      <span className="flex items-center gap-2">
                        <FaCalendarAlt className="text-gray-600" />
                        {car.year}
                      </span>

                      <span className="flex items-center gap-2">
                        <FaCarSide className="text-gray-600" />
                        {car.engine}
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6">
                      <div>
                        <p className="text-xl font-bold text-gray-900">
                          {car.price} AZN
                        </p>

                        <span className="text-sm text-gray-400">
                          günlük qiymət
                        </span>
                      </div>
                      <button
                        className={`w-full sm:w-auto h-12 px-6 rounded-xl border duration-200 flex items-center justify-center gap-2 font-medium cursor-pointer ${
                          token
                            ? exists
                              ? "bg-blue-600 border-blue-600 text-white"
                              : "bg-white border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                            : "bg-white border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                        }`}
                        onClick={() => handleClick(car.id)}
                      >
                        <FaShoppingCart />
                        {token
                          ? exists
                            ? "Əlavə edildi"
                            : "Əlavə et"
                          : !token && "Əlavə et"}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
