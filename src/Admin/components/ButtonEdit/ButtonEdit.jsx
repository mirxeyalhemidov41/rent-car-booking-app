import React, { useState } from "react";
import {
  FaCar,
  FaCogs,
  FaEdit,
  FaGasPump,
  FaImage,
  FaMoneyBill,
  FaUserFriends,
} from "react-icons/fa";

const ButtonEdit = ({ car, cars, setCars }) => {
  const [editCar, setEditCar] = useState({});
  const [editOpen, setEditOpen] = useState(false);

  const handleEdit = (car) => {
    setEditCar(car);
    setEditOpen(true);
  };
  const handleClose = () => {
    setEditOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedCars = cars.map((item) => {
      if (item.id === editCar.id) {
        return editCar;
      }

      return item;
    });

    setCars(updatedCars);

    localStorage.setItem("adminCar", JSON.stringify(updatedCars));

    setEditOpen(false);
  };

  return (
<div>
  {!editOpen ? (
    <button
      onClick={() => handleEdit(car)}
      className="w-full h-13 rounded-2xl bg-blue-600 hover:bg-blue-700 duration-200 text-white font-medium flex items-center justify-center gap-3"
    >
      <FaEdit />
      Redaktə et
    </button>
  ) : (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-start sm:items-center justify-center p-2 sm:p-5 z-50 overflow-y-auto">
      <div className="w-full max-w-5xl bg-white rounded-2xl sm:rounded-[30px] shadow-2xl relative my-4 sm:my-10 max-h-[95vh] overflow-y-auto">
        <div className="flex items-start justify-between gap-3 border-b border-gray-100 px-4 sm:px-8 py-4 sm:py-5">
          <div>
            <h1 className="text-xl sm:text-3xl font-bold text-gray-900">
              Maşını redaktə et
            </h1>

            <p className="text-gray-500 mt-1 sm:mt-2 text-sm sm:text-base">
              Maşın məlumatlarını yenilə.
            </p>
          </div>

          <button
            onClick={handleClose}
            className="min-w-[40px] sm:min-w-[45px] h-[40px] sm:h-[45px] rounded-full bg-gray-100 hover:bg-red-500 hover:text-white duration-200 flex items-center justify-center text-xl"
          >
            ×
          </button>
        </div>

        <div className="p-4 sm:p-8">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5"
          >
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">
                Maşın adı
              </label>

              <div className="h-12 sm:h-14 border border-gray-200 rounded-2xl px-4 flex items-center gap-3 focus-within:border-blue-500 duration-200">
                <FaCar className="text-gray-400 text-lg" />

                <input
                  value={editCar?.name || ""}
                  onChange={(e) =>
                    setEditCar({
                      ...editCar,
                      name: e.target.value,
                    })
                  }
                  type="text"
                  placeholder="Maşının adını daxil edin"
                  className="w-full outline-none bg-transparent"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">
                Qiymət
              </label>

              <div className="h-12 sm:h-14 border border-gray-200 rounded-2xl px-4 flex items-center gap-3 focus-within:border-blue-500 duration-200">
                <FaMoneyBill className="text-gray-400 text-lg" />

                <input
                  value={editCar?.price || ""}
                  onChange={(e) =>
                    setEditCar({
                      ...editCar,
                      price: e.target.value,
                    })
                  }
                  type="number"
                  placeholder="Günlük qiyməti yazın"
                  className="w-full outline-none bg-transparent"
                  min={0}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">
                Yanacaq növü
              </label>

              <div className="h-12 sm:h-14 border border-gray-200 rounded-2xl px-4 flex items-center gap-3">
                <FaGasPump className="text-gray-400 text-lg" />

                <select
                  value={editCar?.fuel || ""}
                  onChange={(e) =>
                    setEditCar({
                      ...editCar,
                      fuel: e.target.value,
                    })
                  }
                  className="w-full outline-none bg-transparent text-gray-700"
                  required
                >
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

              <div className="h-12 sm:h-14 border border-gray-200 rounded-2xl px-4 flex items-center gap-3">
                <FaCogs className="text-gray-400 text-lg" />

                <select
                  value={editCar?.transmission || ""}
                  onChange={(e) =>
                    setEditCar({
                      ...editCar,
                      transmission: e.target.value,
                    })
                  }
                  className="w-full outline-none bg-transparent text-gray-700"
                  required
                >
                  <option>Avtomat</option>
                  <option>Manual</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">
                Oturacaq sayı
              </label>

              <div className="h-12 sm:h-14 border border-gray-200 rounded-2xl px-4 flex items-center gap-3">
                <FaUserFriends className="text-gray-400 text-lg" />

                <input
                  value={editCar?.seats || ""}
                  onChange={(e) =>
                    setEditCar({
                      ...editCar,
                      seats: e.target.value,
                    })
                  }
                  type="number"
                  placeholder="Maşının neçə nəfərlik olduğunu yazın"
                  className="w-full outline-none bg-transparent"
                  min={0}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">
                İstehsal ili
              </label>

              <div className="h-12 sm:h-14 border border-gray-200 rounded-2xl px-4 flex items-center gap-3">
                <FaUserFriends className="text-gray-400 text-lg" />

                <input
                  value={editCar?.year || ""}
                  onChange={(e) =>
                    setEditCar({
                      ...editCar,
                      year: e.target.value,
                    })
                  }
                  type="number"
                  placeholder="İstehsal ilin yazın"
                  className="w-full outline-none bg-transparent"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">
                Mühərrik
              </label>

              <div className="h-12 sm:h-14 border border-gray-200 rounded-2xl px-4 flex items-center gap-3">
                <FaUserFriends className="text-gray-400 text-lg" />

                <input
                  value={editCar?.engine || ""}
                  onChange={(e) =>
                    setEditCar({
                      ...editCar,
                      engine: e.target.value,
                    })
                  }
                  type="number"
                  step="0.1"
                  placeholder="Mühərriki yazın"
                  className="w-full outline-none bg-transparent"
                  min={0}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">
                Populyar maşın
              </label>

              <div className="border border-gray-200 rounded-2xl p-4 flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={editCar?.isPopular || false}
                  onChange={(e) =>
                    setEditCar({
                      ...editCar,
                      isPopular: e.target.checked,
                    })
                  }
                  className="w-5 h-5 mt-1 cursor-pointer"
                />

                <span className="text-gray-700 text-sm sm:text-base">
                  Bu maşın populyar maşınlar bölməsində göstərilsin
                </span>
              </div>
            </div>

            <div className="lg:col-span-2">
              <label className="text-gray-700 font-medium mb-2 block">
                Maşın şəkli
              </label>

              <label className="border-2 border-dashed border-gray-300 rounded-2xl sm:rounded-[28px] p-4 sm:p-7 bg-gray-50 flex flex-col lg:flex-row items-center gap-5 hover:border-blue-500 duration-200 cursor-pointer">
                <div className="min-w-[80px] sm:min-w-[90px] h-[80px] sm:h-[90px] rounded-3xl bg-blue-100 text-blue-600 flex items-center justify-center text-3xl sm:text-4xl">
                  <FaImage />
                </div>

                <div className="flex-1 text-center lg:text-left">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                    Yeni şəkil seç
                  </h2>

                  <p className="text-gray-500 mt-2 text-sm">
                    PNG, JPG və ya WEBP formatı
                  </p>

                  <div className="mt-4 inline-flex px-6 h-11 rounded-2xl bg-blue-600 hover:bg-blue-700 duration-200 text-white font-medium items-center justify-center">
                    Fayl seç
                  </div>
                </div>

                <div className="w-full max-w-[220px] h-[140px] rounded-2xl overflow-hidden bg-white border border-gray-200 flex items-center justify-center">
                  <img
                    src={editCar?.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files[0];

                    if (!file) return;

                    const reader = new FileReader();

                    reader.onloadend = () => {
                      setEditCar({
                        ...editCar,
                        image: reader.result,
                      });
                    };

                    reader.readAsDataURL(file);
                  }}
                />
              </label>
            </div>

            <div className="lg:col-span-2 flex flex-col-reverse sm:flex-row gap-3 justify-end mt-2">
              <button
                type="button"
                className="w-full sm:w-fit px-8 h-12 sm:h-14 rounded-2xl border border-gray-300 hover:bg-gray-100 duration-200 text-gray-700 font-medium"
                onClick={handleClose}
              >
                Ləğv et
              </button>

              <button
                type="submit"
                className="w-full sm:w-fit px-10 h-12 sm:h-14 rounded-2xl bg-blue-600 hover:bg-blue-700 duration-200 text-white font-medium"
              >
                Yadda saxla
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )}
</div>
  );
};

export default ButtonEdit;
