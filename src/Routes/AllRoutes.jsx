import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Components/homepage/HomePage";
import Holidays from "../Holiday/Holidays";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/holidays" element={<Holidays />}></Route>
    </Routes>
  );
}

export default AllRoutes;
