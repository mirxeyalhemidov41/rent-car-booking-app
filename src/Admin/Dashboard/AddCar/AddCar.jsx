import React, { useState } from "react";
import {
  FaCar,
  FaGasPump,
  FaCogs,
  FaUserFriends,
  FaImage,
} from "react-icons/fa";

export const AddCar = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [fuel, setFuel] = useState("");
  const [transmission, setTransmission] = useState("");
  const [seats, setSeats] = useState("");
  const [image, setImage] = useState("");
  const [authCar, setAuthCar] = useState(
    JSON.parse(localStorage.getItem("adminCar")) || [],
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCar = {
      id: crypto.randomUUID(),
      name: name,
      price: price,
      fuel: fuel,
      transmission: transmission,
      seats: seats,
      image: image,
    };

    const updatedCar = [...authCar, newCar];
    setAuthCar(updatedCar);

    localStorage.setItem("adminCar", JSON.stringify(updatedCar));

    setName("");
    setPrice("");
    setFuel("");
    setTransmission("");
    setSeats("");
    setImage("");
  };

  return (
    <div className="min-h-screen mt-20 lg:mt-0 bg-gray-100 p-4 sm:p-6 lg:p-10">
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

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            <div className="flex flex-col">
              <label
                className="text-gray-700 font-medium mb-2 html"
                htmlFor="name"
              >
                Maşın adı
              </label>

              <div className="h-14 border border-gray-200 rounded-2xl px-4 flex items-center gap-3 focus-within:border-blue-500 duration-200">
                <FaCar className="text-gray-400" />

                <input
                  id="name"
                  type="text"
                  placeholder="Maşının adını daxil edin"
                  className="w-full outline-none bg-transparent"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2" htmlFor="price">
                Qiymət
              </label>

              <div className="h-14 border border-gray-200 rounded-2xl px-4 flex items-center gap-3 focus-within:border-blue-500 duration-200">
                <FaCar className="text-gray-400" />

                <input
                  min={0}
                  id="price"
                  type="number"
                  placeholder="Günlük qiyməti yazın"
                  className="w-full outline-none bg-transparent"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2" htmlFor="fuel">
                Yanacaq növü
              </label>

              <div className="h-14 border border-gray-200 rounded-2xl px-4 flex items-center gap-3 focus-within:border-blue-500 duration-200">
                <FaGasPump className="text-gray-400" />

                <select
                  id="fuel"
                  className="w-full outline-none bg-transparent text-gray-700"
                  value={fuel}
                  onChange={(e) => setFuel(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Yanacaq növü seçin
                  </option>
                  <option value="Benzin">Benzin</option>
                  <option value="Dizel">Dizel</option>
                  <option value="Elektrik">Elektrik</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col">
              <label
                className="text-gray-700 font-medium mb-2"
                htmlFor="transmission"
              >
                Sürətlər qutusu
              </label>

              <div className="h-14 border border-gray-200 rounded-2xl px-4 flex items-center gap-3 focus-within:border-blue-500 duration-200">
                <FaCogs className="text-gray-400" />

                <select
                  id="transmission"
                  className="w-full outline-none bg-transparent text-gray-700"
                  value={transmission}
                  onChange={(e) => setTransmission(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Sürətlər qutusu seçin
                  </option>
                  <option value="Avtomat">Avtomat</option>
                  <option value="Manual">Manual</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2" htmlFor="seats">
                Oturacaq sayı
              </label>

              <div className="h-14 border border-gray-200 rounded-2xl px-4 flex items-center gap-3 focus-within:border-blue-500 duration-200">
                <FaUserFriends className="text-gray-400" />

                <input
                  min={0}
                  id="seats"
                  type="number"
                  placeholder="Maşının neçə nəfərlik olduğunu yazın"
                  className="w-full outline-none bg-transparent"
                  value={seats}
                  onChange={(e) => setSeats(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="xl:col-span-2">
              <label className="text-gray-700 font-medium mb-2 block">
                Maşın şəkli
              </label>

              <label className="  border-2 border-dashed border-gray-300  rounded-[28px]  p-4 sm:p-6 lg:p-7  bg-gray-50  flex flex-col  md:flex-col  xl:flex-row  items-center  gap-5 lg:gap-6  hover:border-blue-500  duration-200  cursor-p ">
                <div className=" w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] rounded-3xl bg-blue-100 text-blue-600 flex items-center justify-center text-3xl sm:text-4xl shrink-0">
                  <FaImage />
                </div>

                <div className="flex-1 text-center xl:text-left w-full">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                    Yeni şəkil seç
                  </h2>

                  <p className="text-gray-500 mt-2 text-sm sm:text-base">
                    PNG, JPG və ya WEBP formatı
                  </p>

                  <div className=" mt-5 w-full sm:w-fit inline-flex px-6 h-12 rounded-2xl bg-blue-600 hover:bg-blue-700 duration-200 text-white font-medium items-center justify-center">
                    Fayl seç
                  </div>
                </div>

                {image && (
                  <div className=" w-full md:w-[300px] xl:w-[220px] h-[180px] sm:h-[220px] xl:h-[140px] rounded-2xl overflow-hidden bg-white border border-gray-200 flex items-center justify-center shrink-0 ">
                    <img
                      src={image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files[0];

                    if (!file) return;

                    const reader = new FileReader();

                    reader.onloadend = () => {
                      setImage(reader.result);
                    };

                    reader.readAsDataURL(file);
                  }}
                />
              </label>
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
