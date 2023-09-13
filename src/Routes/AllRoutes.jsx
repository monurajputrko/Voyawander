import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Components/homepage/HomePage";
import ContactUs from "../Components/contact-us/ContactUs";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/contactus" element={<ContactUs />}></Route>
    </Routes>
  );
}

export default AllRoutes;
