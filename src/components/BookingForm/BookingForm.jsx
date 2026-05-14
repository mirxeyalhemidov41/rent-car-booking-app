import React from 'react'
import Cars from '../../data/CarsArr';

export const BookingForm = () => {
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
      };
  return (
    <div>
        <form
  onSubmit={HandleForm}
  className="flex flex-col md:flex-row gap-6 md:gap-10 p-5 md:p-8 lg:p-10 rounded-2xl shadow-xl justify-between md:items-end flex-wrap"
>
  <div className="flex flex-col w-full md:w-[220px]">
    <label className="text-gray-800 font-medium" htmlFor="masin">
      Maşını seç:
    </label>

    <select
      id="masin"
      name=""
      value={selectedCar}
      onChange={(e) => setSelectedCar(e.target.value)}
      className="outline-none border text-gray-400 border-gray-300 rounded-sm w-full px-2 py-2 my-2"
    >
      <option value="">Maşın Seçin</option>

      {names?.map((name) => (
        <option key={name} value={name}>
          {name}
        </option>
      ))}
    </select>
  </div>

  <div className="flex flex-col w-full md:w-[220px]">
    <label className="text-gray-800 font-medium" htmlFor="start">
      Götüreləcək tarix:
    </label>

    <input
      type="date"
      name=""
      id="start"
      value={duedate}
      onChange={(e) => setDueDate(e.target.value)}
      className="outline-none border text-gray-400 border-gray-300 rounded-sm w-full px-2 py-2 my-2"
    />
  </div>

  <div className="flex flex-col w-full md:w-[220px]">
    <label className="text-gray-800 font-medium" htmlFor="end">
      Geri qaytarılacaq tarix:
    </label>

    <input
      type="date"
      name=""
      id="end"
      value={returndate}
      onChange={(e) => setReturnDate(e.target.value)}
      className="outline-none border text-gray-400 border-gray-300 rounded-sm w-full px-2 py-2 my-2"
    />
  </div>

  <button
    type="submit"
    className="w-full md:w-auto text-white bg-blue-600 px-6 h-12 rounded-lg"
  >
    Qiymətə bax
  </button>

  <div className="flex flex-col w-full md:w-auto">
    <label className="text-gray-800 font-medium">
      Qiymət:
    </label>

    <span className="w-full md:min-w-20 text-center border text-gray-400 border-gray-300 rounded-sm px-2 py-2 my-2">
      {price > 0 ? `${price} AZN` : "-"}
    </span>
  </div>
</form>
    </div>
  )
}
