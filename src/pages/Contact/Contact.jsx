import React, { useState } from "react";
import {
  FaBuilding,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

export const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `
Ad: ${firstName}
Email: ${email}
Telefon: ${phone}

Mesaj:
${message}
  `;

    window.open(
      `https://wa.me/994105122141?text=${encodeURIComponent(text)}`,
      "_blank",
    );

    setFirstName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <div>
      <div
        data-aos="fade-up"
        className="mt-30 lg:mt-40 grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        <div className="space-y-4">
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="group border border-gray-200 rounded-2xl p-5 bg-white hover:border-blue-500 hover:shadow-lg duration-300 cursor-pointer"
          >
            <div className="flex items-start gap-4">
              <div className="w-15 h-15 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3 className="font-bold text-2xl text-gray-900">Baş ofis</h3>
                <p className="text-lg text-gray-500 mt-1">
                  Azərbaycan, Bakı şəhəri
                </p>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="group border border-gray-200 rounded-2xl p-5 bg-white hover:border-blue-500 hover:shadow-lg duration-300 cursor-pointer"
          >
            <div className="flex items-start gap-4">
              <div className="w-15 h-15  rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <FaBuilding />
              </div>

              <div>
                <h3 className="font-bold text-2xl text-gray-900">Filial</h3>
                <p className="text-lg text-gray-500 mt-1">
                  Bakı şəhəri, Nizami rayonu
                </p>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="group border border-gray-200 rounded-2xl p-5 bg-white hover:border-blue-500 hover:shadow-lg duration-300 cursor-pointer"
          >
            <div className="flex items-start gap-4">
              <div className="w-15 h-15  rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <FaPhone />
              </div>

              <div>
                <h3 className="font-bold text-2xl text-gray-900">Telefon</h3>
                <p className="text-lg text-gray-500 mt-1">+994 10 512 21 41</p>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="group border border-gray-200 rounded-2xl p-5 bg-white hover:border-blue-500 hover:shadow-lg duration-300 cursor-pointer"
          >
            <div className="flex items-start gap-4">
              <div className="w-15 h-15  rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <FaEnvelope />
              </div>

              <div>
                <h3 className="font-bold text-2xl text-gray-900">Email</h3>
                <p className="text-lg text-gray-500 mt-1">
                  mirxeyalhemidov1@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="800"
          className="bg-white rounded-[32px] border border-gray-100 shadow-xl p-6 sm:p-8 lg:p-10"
        >
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Bizə mesaj göndərin
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label
                  className="block text-lg font-bold text-gray-700 mb-2"
                  htmlFor="name"
                >
                  Adınız
                </label>

                <input
                  id="name"
                  required
                  type="text"
                  placeholder="John Doe"
                  className="w-full h-14 px-5 rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 outline-none duration-200"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div>
                <label
                  className="block text-lg font-bold text-gray-700 mb-2"
                  htmlFor="email"
                >
                  Email
                </label>

                <input
                  id="email"
                  required
                  type="email"
                  placeholder="john@example.com"
                  className="w-full h-14 px-5 rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 outline-none duration-200"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label
                className="block text-lg font-bold text-gray-700 mb-2"
                htmlFor="phone"
              >
                Telefon nömrəniz
              </label>

              <input
                id="phone"
                required
                type="number"
                min={0}
                placeholder="Mesajın mövzusu"
                className="w-full h-14 px-5 rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 outline-none duration-200"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div>
              <label
                className="block text-lg font-bold text-gray-700 mb-2"
                htmlFor="text"
              >
                Mesajınız
              </label>

              <textarea
                id="text"
                required
                rows={6}
                placeholder="Mesajınızı yazın..."
                className="w-full p-5 rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 outline-none resize-none duration-200"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 duration-300 text-white font-semibold text-lg shadow-lg shadow-blue-500/25"
            >
              Göndər
            </button>
          </form>
        </div>
      </div>

      <div data-aos="zoom-in-up" data-aos-duration="1000" className="mt-12">
        <div className="bg-white p-4 rounded-[40px] shadow-xl border border-gray-100">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1519.2346816248082!2d49.83114423852285!3d40.39845180576783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d7d6c04859b%3A0xcd1c5bca67eb6832!2zQXrJmXJiYXljYW4gVGliYiBVbml2ZXJzaXRldGluaW4gNiBzYXlsxLEgVMmZbMmZYsmZIFlhdGFxeGFuYXPEsQ!5e0!3m2!1saz!2saz!4v1780261669139!5m2!1saz!2saz"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            loading="lazy"
            className="w-full h-[280px] sm:h-[350px] lg:h-[500px] rounded-[32px]"
          />
        </div>
      </div>
    </div>
  );
};
