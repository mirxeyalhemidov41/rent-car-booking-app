import React from "react";
import { useNavigate } from "react-router";
import { ROUTES } from "../../utils/const";
import { FaSignOutAlt } from "react-icons/fa";

export const Logout = ({ adminToken }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem(adminToken);
    const token = localStorage.getItem("token")
    if(!token){
      navigate(ROUTES.HOME);
    }
  };

  return (
    <div>
      <button className="flex w-full items-center h-14 gap-4" onClick={handleClick}>
      <FaSignOutAlt />
      Çıxış et
    </button>
    </div>
  );
};
