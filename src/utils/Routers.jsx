import React from 'react'
import { Route, Routes } from 'react-router'
import { Home } from '../pages/Home/Home'
import { Cars } from '../pages/Cars/Cars'
import { AboutUs } from '../pages/AboutUs/AboutUs'
import { ROUTES } from './const'

export const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home/>}/>
        <Route path={ROUTES.CARS} element={<Cars/>}/>
        <Route path={ROUTES.ABOUTUS} element={<AboutUs/>}/>
      </Routes>
    </div>
  )
}
