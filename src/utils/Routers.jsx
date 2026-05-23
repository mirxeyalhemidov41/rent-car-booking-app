import React from "react";
import { Route, Routes } from "react-router";
import { Home } from "../pages/Home/Home";
import { Cars } from "../pages/Cars/Cars";
import { AboutUs } from "../pages/AboutUs/AboutUs";
import { ADMIN_ROUTES, ROUTES } from "./const";
import { Login } from "../pages/LoginRegister/Login";
import { Basget } from "../pages/Basket/Basget";
import { Profile } from "../pages/LoginRegister/Profile";
import { NotFound } from "../pages/NotFound/NotFound";
import Admin from "../Admin/Admin";
import { AddCar } from "../Admin/Dashboard/AddCar";
import { AllCars } from "../Admin/Dashboard/AllCars";
import { Logout } from "../components/Logout/Logout";
import { Register } from "../pages/LoginRegister/Register";

export const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.CARS} element={<Cars />} />
        <Route path={ROUTES.ABOUTUS} element={<AboutUs />} />
        <Route path={ROUTES.BASKET} element={<Basget />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.REGISTER} element={<Register />} />
        <Route path={ROUTES.PROFILE} element={<Profile />} />

        <Route path={ROUTES.ADMIN} element={<Admin />}>
          <Route path={ADMIN_ROUTES.ADDCAR} element={<AddCar />} />
          <Route path={ADMIN_ROUTES.ALLCARS} element={<AllCars />} />
          <Route path={ADMIN_ROUTES.LOGOUT} element={<Logout />} />
        </Route>

        <Route path={ROUTES.NOTFOUND} element={<NotFound />} />
      </Routes>
    </div>
  );
};
