import React from "react";
import banner from "../../../public/banner.png";
import Cars from "../../data/CarsArr";
import { FaCogs, FaGasPump, FaUserFriends } from "react-icons/fa";

export const Home = () => {
  const [names, setName] = React.useState([]);
  const [selectedCar, setSelectedCar] = React.useState("");
  const [duedate, setDueDate] = React.useState("");
  const [returndate, setReturnDate] = React.useState("");
  const [price, setPrice] = React.useState(0);

  React.useEffect(() => {
    const carNames = Cars.map((car) => car.name);
    setName(carNames);
  }, []);

  const HandleForm = (e) => {
    e.preventDefault();
    if (!selectedCar || !duedate || !returndate) {
      alert("Zəhmət olmasa bütün xanaları doldurun!");
      return;
    }
    const start = new Date(duedate);
    const end = new Date(returndate);
    const diffDays = (end - start) / (1000 * 60 * 60 * 24);
    if (diffDays <= 0) {
      alert("Qaytarılacaq tarix götürüləcək tarixdən sonra olmalıdır!");
      return;
    }
    const car = Cars.find((item) => item.name === selectedCar);
    if (car) {
      setPrice(car.price * diffDays);
    }
    setSelectedCar("");
    setDueDate("");
    setReturnDate("");
  };

  const handleClick = (e) => {
    const car = Cars.find((c) => c.id === e);

    const existing = JSON.parse(localStorage.getItem("selectedCars")) || [];

    const exists = existing.find((item) => item.id === e);

    if (exists) {
      return;
    }

    const updated = [...existing, car];

    localStorage.setItem("selectedCars", JSON.stringify(updated));
  };

  return (
    <div>
      <section>
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

        <form
          onSubmit={HandleForm}
          className="flex gap-15 p-10 rounded-2xl shadow-xl justify-between items-center flex-wrap"
        >
          <div className="flex flex-col">
            <label className="text-gray-800 font-medium" htmlFor="masin">
              Maşını seç:
            </label>
            <select
              id="masin"
              value={selectedCar}
              onChange={(e) => setSelectedCar(e.target.value)}
              className="outline-none border text-gray-400 border-gray-300 rounded-sm w-50 px-2 py-1 my-2"
            >
              <option value="">Maşın Seçin</option>
              {names?.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-gray-800 font-medium" htmlFor="">
              Götüreləcək tarix:
            </label>
            <input
              type="date"
              name=""
              value={duedate}
              onChange={(e) => setDueDate(e.target.value)}
              className="outline-none border text-gray-400 border-gray-300 rounded-sm w-50 px-2 py-1 my-2"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-800 font-medium" htmlFor="">
              Geri qaytarılacaq tarix:
            </label>
            <input
              type="date"
              name=""
              value={returndate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="outline-none border text-gray-400 border-gray-300 rounded-sm w-50 px-2 py-1 my-2 "
            />
          </div>

          <button
            type="submit"
            className=" text-white bg-blue-600 px-4 h-12 rounded-lg"
          >
            Qiymətə bax
          </button>
          <div className="flex flex-col">
            <label className="text-gray-800 font-medium">Qiymət:</label>
            <span className="min-w-20 text-center border text-gray-400 border-gray-300 rounded-sm px-2 py-1 my-2 ">
              {price > 0 ? `${price} AZN` : "-"}
            </span>
          </div>
        </form>
      </section>

      <section>
        <div className="mt-15">
          <h1 className="text-gray-900 font-medium text-2xl">
            Populyar maşınlar
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {Cars?.map((car) => { 
            const existing =
              JSON.parse(localStorage.getItem("selectedCars")) || [];
            const exists = existing.find((item) => item.id === car.id);
            return (
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
                    className={`border border-blue-500 text-blue-500 px-8 py-1.5 rounded-lg hover:bg-blue-500 hover:text-white transition  ${
                      exists
                        ? "bg-blue-500 text-white"
                        : "bg-white text-blue-500 hover:bg-blue-500 hover:text-white"
                    }`}
                    onClick={() => handleClick(car.id)}
                  >
                    Səbətə at
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
