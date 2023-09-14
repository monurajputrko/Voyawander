import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Components/homepage/HomePage";
import Holidays from "../Holiday/HolidayPage/Holidays";
import HolidaySingleProduct from "../Holiday/HolidaySingleProductPage/HolidaySingleProduct";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/holidays" element={<Holidays/>}></Route>
      <Route path="/singleproductpage" element={<HolidaySingleProduct/> } />
    </Routes>
  );
}

export default AllRoutes;
