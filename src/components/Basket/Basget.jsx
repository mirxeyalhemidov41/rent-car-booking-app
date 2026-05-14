import React, { useContext } from "react";
import {
  FaCogs,
  FaGasPump,
  FaShoppingCart,
  FaTimes,
  FaUserFriends,
  FaWhatsapp,
} from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MessageContent } from "../Mesage/MessageProvider";
import { data, NavLink } from "react-router";
import { ROUTES } from "../../utils/const";

export const Basget = () => {
  const { basket, setBasket } = useContext(MessageContent);
  const [day, setDay] = React.useState([]);
  const DueDate = (e, id) => {
    const updated = basket.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          dueDate: e.target.value,
        };
      }

      return item;
    });

    setBasket(updated);

    localStorage.setItem("selectedCars", JSON.stringify(updated));
  };
  const ReturnDate = (e, id) => {
    const updated = basket.map((item) => {
      if (item.id === id) {
        const start = new Date(item.dueDate);
        const end = new Date(e.target.value);

        const diffDays = (end - start) / (1000 * 60 * 60 * 24);

        if (diffDays <= 0) {
          alert("Qaytarılacaq tarix götürüləcək tarixdən sonra olmalıdır!");
          item.returnDate = "";
          return item;
        }

        return {
          ...item,

          returnDate: e.target.value,

          totalPrice: diffDays * item.price,
          diffDays: diffDays,
        };
      }

      return item;
    });

    setBasket(updated);

    localStorage.setItem("selectedCars", JSON.stringify(updated));
  };

  React.useEffect(() => {
    const data = JSON.parse(localStorage.getItem("selectedCars")) || [];
    setBasket(data);
  }, []);

  const HandleClick = (e) => {
    const data = JSON.parse(localStorage.getItem("selectedCars") || []);
    const exists = data.find((item) => item.id === e);
    const updated = data.filter((item) => item.id !== e);
    localStorage.setItem("selectedCars", JSON.stringify(updated));
    setBasket(updated);
  };

  let selectedCars = basket.filter((item) => item.totalPrice > 0);

  let totalDays = basket.reduce((acc, item) => acc + item.diffDays, 0);

  let subtotal = basket.reduce((acc, item) => acc + item.totalPrice, 0);

  const handleClearBasket = () => {
    setBasket([]);
    localStorage.removeItem("selectedCars");
  };

  const message = `
Salam.
Maşın götürmək etmək istəyirəm.
Maşın sayı: ${selectedCars.length}
Maşın adı: ${selectedCars?.map((item) => {
    return item.name;
  })}
Ümumi gün sayı: ${totalDays}
Ümumi məbləğ: ${subtotal} AZN
`;

  return (
    <div>
      <div className="py-10 min-h-screen">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="mb-8">
            <p className="text-gray-400 text-sm mb-2">Ana Səhifə / Səbət</p>

            <h1 className="text-4xl font-bold text-gray-900">Səbət</h1>

            <span className="text-gray-500 mt-2 block">
              {basket.length} maşın seçdiniz
            </span>
          </div>

          <div className="flex flex-col xl:flex-row gap-8">
            <div className="flex-1 flex flex-col gap-6">
              {basket?.map((car) => (
                <div
                  key={car.id}
                  className="bg-white border border-gray-200 rounded-3xl p-6 flex flex-col lg:flex-row gap-6 shadow-sm"
                >
                  <div className="flex justify-center items-center">
                    <img
                      src={car.image}
                      alt=""
                      className="w-[250px] object-contain"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex items-start justify-between flex-wrap gap-4">
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">
                          {car.name}
                        </h2>

                        <div className="flex items-center gap-5 mt-3 text-gray-500 text-sm flex-wrap">
                          <span className="flex items-center gap-2">
                            <FaCogs className="text-gray-600" />{" "}
                            {car.transmission}
                          </span>

                          <span className="flex items-center gap-2">
                            <FaGasPump className="text-gray-600" /> {car.fuel}
                          </span>

                          <span className="flex items-center gap-2">
                            <FaUserFriends className="text-gray-600" />{" "}
                            {car.seats}
                          </span>
                        </div>
                      </div>

                      <button
                        className="text-3xl text-gray-400 hover:text-blue-500 duration-200 cursor-pointer"
                        onClick={() => HandleClick(car.id)}
                      >
                        ×
                      </button>
                    </div>

                    <div className="flex flex-col 2xl:flex-row 2xl:items-center justify-between gap-6 mt-8">
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="border border-gray-200 rounded-xl p-3 min-w-[180px]">
                          <p className="text-sm text-gray-400">
                            Götürüləcək tarix
                          </p>

                          <input
                            type="date"
                            className="font-medium text-gray-800 block mt-1"
                            value={car.dueDate}
                            onChange={(e) => DueDate(e, car.id)}
                          />
                        </div>

                        <div className="border border-gray-200 rounded-xl p-3 min-w-[180px]">
                          <p className="text-sm text-gray-400">
                            Qaytarılacaq tarix
                          </p>

                          <input
                            type="date"
                            className="font-medium text-gray-800 block mt-1"
                            value={car.returnDate}
                            onChange={(e) => ReturnDate(e, car.id)}
                          />
                        </div>
                      </div>

                      <div>
                        <span className="text-gray-400 text-sm">
                          {car.price} AZN / gün
                        </span>

                        <h2 className="text-2xl font-bold text-gray-900 mt-1">
                          {car.totalPrice} AZN
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {basket.length > 0 ? (
              <div className="w-full xl:w-[400px]">
                <div className="bg-white rounded-3xl border border-gray-200 p-8 sticky top-5 shadow-sm">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">
                    Sifariş xülasəsi
                  </h2>

                  <div className="space-y-5">
                    <div className="flex justify-between text-gray-500">
                      <span>Maşın sayı</span>
                      <span>{selectedCars.length}</span>
                    </div>

                    <div className="flex justify-between text-gray-500">
                      <span>Ümumi gün sayı</span>
                      <span> {totalDays} gün</span>
                    </div>

                    <div className="flex justify-between text-gray-500">
                      <span>Ara məbləğ</span>
                      <span>{subtotal} AZN</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 my-8"></div>

                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-gray-900">
                      Ümumi məbləğ
                    </span>

                    <span className="text-4xl font-bold text-blue-600">
                      {subtotal}
                    </span>
                  </div>

                  {subtotal ? (
                    <a
                      href={`https://wa.me/994105122141?text=${encodeURIComponent(message)}`}
                      target="_blank"
                      className="w-full h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-medium text-lg mt-8"
                    >
                      Sifarişi tamamla
                    </a>
                  ) : (
                    <button
                      disabled
                      className="w-full h-14 rounded-2xl bg-gray-400 text-white font-medium text-lg mt-8 cursor-not-allowed"
                    >
                      Sifarişi tamamla
                    </button>
                  )}

                  {basket.length > 0 ? (
                    <button
                      onClick={handleClearBasket}
                      className="w-full h-14 rounded-2xl border border-gray-300 hover:bg-gray-100 duration-200 text-gray-700 font-medium text-lg mt-4 cursor-pointer"
                    >
                      Səbəti təmizlə
                    </button>
                  ) : (
                    <button
                      disabled
                      className="w-full h-14 rounded-2xl border border-gray-300 hover:bg-gray-100 duration-200 text-gray-700 font-medium text-lg mt-4 cursor-not-allowed"
                    >
                      Səbəti təmizlə
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div className="w-full flex items-center justify-center py-20 px-4">
                <div className="w-full max-w-md bg-white border border-gray-200 rounded-3xl shadow-sm p-10 text-center">
                  <div className="w-24 h-24 mx-auto rounded-full bg-blue-50 flex items-center justify-center">
                    <FaShoppingCart className="text-4xl text-blue-600" />
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-6">
                    Səbət boşdur
                  </h2>

                  <p className="text-gray-500 mt-3 text-sm sm:text-base leading-6">
                    Hələ səbətə maşın əlavə etməmisiniz. İstədiyiniz maşını
                    seçərək sifarişə başlaya bilərsiniz.
                  </p>

                  <NavLink
                    to={ROUTES.HOME}
                    className="w-full h-14 mt-8 rounded-2xl bg-blue-600 hover:bg-blue-700 duration-200 text-white font-medium text-lg flex items-center justify-center"
                  >
                    Maşınlara bax
                  </NavLink>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
