import React, { createContext, useState, useEffect } from "react";

export const MessageContent = createContext();

export const MessageProvider = ({ children }) => {
  const [basket, setBasket] = useState(
    JSON.parse(localStorage.getItem("selectedCars")) || [],
  );

  return (
    <MessageContent.Provider value={{ basket, setBasket }}>
      {children}
    </MessageContent.Provider>
  );
};
