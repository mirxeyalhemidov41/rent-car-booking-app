import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { ROUTES } from "../utils/const";
import { Sidebar } from "./Sidebar";

export default function Admin() {
  const navigate = useNavigate();

  useEffect(() => {
    const admin = localStorage.getItem("admin");
    if (admin) {
      navigate(ROUTES.STATISTICS);
    }
  }, []);

 return (
  <div className="flex min-h-screen w-full bg-gray-100">
    
    <Sidebar />

    <div className="flex-1 p-5 lg:p-10">
      <Outlet />
    </div>

  </div>
);
}
