import React from "react";
import { Route, Routes } from "react-router";
import { Home } from "../pages/Home/Home";
import { Cars } from "../pages/Cars/Cars";
import { AboutUs } from "../pages/AboutUs/AboutUs";
import { ROUTES } from "./const";
import { Login } from "../pages/LoginRegister/Login";
import { Basget } from "../components/Basket/Basget";
import { Profile } from "../pages/LoginRegister/Profile";

export const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.CARS} element={<Cars />} />
        <Route path={ROUTES.ABOUTUS} element={<AboutUs />} />
        <Route path={ROUTES.BASKET} element={<Basget />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.PROFILE} element={<Profile />} />
      </Routes>
    </div>
  );
};
