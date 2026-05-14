import React, { createContext, useState, useEffect } from "react";

export const MessageContent = createContext();

export const MessageProvider = ({ children }) => {

  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("selectedCars")) || [];

    setBasket(data);
  }, []);

  return (
    <MessageContent.Provider
      value={{ basket, setBasket }}
    >
      {children}
    </MessageContent.Provider>
  );
};