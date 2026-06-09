import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { ROUTES } from "../../utils/const";
import { FaSignOutAlt } from "react-icons/fa";
import { MessageContent } from "../ContextApi/MessageProvider";

export const Logout = ({ userToken, selectedCars,adminToken }) => {
  const { basket, setBasket } = useContext(MessageContent);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem(userToken);
    localStorage.removeItem(selectedCars);
    localStorage.removeItem(adminToken);
    const token = localStorage.getItem("token");
    if (!token) {
      navigate(ROUTES.HOME);
    }

    setBasket([]);
  };

  return (
    <div>
      <button className="w-full lg:-ml-14 h-14" onClick={handleLogout}>
        <FaSignOutAlt className="inline mr-3" />
        Çıxış et
      </button>
    </div>
  );
};
