import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Components/homepage/HomePage";
import ContactUs from "../Components/contact-us/ContactUs";
import Holidays from "../Holiday/HolidayPage/Holidays";
import HolidaySingleProduct from "../Holiday/HolidaySingleProductPage/HolidaySingleProduct";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/contactus" element={<ContactUs />}></Route>
      <Route path="/holidays" element={<Holidays/>}></Route>
      <Route path="/singleproductpage" element={<HolidaySingleProduct/> } />
    </Routes>
  );
}

export default AllRoutes;
