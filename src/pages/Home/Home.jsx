import React, { useContext } from "react";
import banner from "../../../public/banner.png";
import Cars from "../../data/CarsArr";
import { FaCogs, FaGasPump, FaUserFriends } from "react-icons/fa";
import { MessageContent } from "../../components/Mesage/MessageProvider";
import { CarsFilter } from "../../components/CarsFilter/CarsFilter";
import { BookingForm } from "../../components/BookingForm/BookingForm";

export const Home = () => {
 
  return (
    <div>
      <section className="pt-19">
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

        <BookingForm/>
      </section>

      <section>
        <div className="mt-15">
          <h1 className="text-gray-900 font-medium text-2xl">
            Populyar maşınlar
          </h1>
        </div>

        <CarsFilter/>
      </section>
    </div>
  );
};
