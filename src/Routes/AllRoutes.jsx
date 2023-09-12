import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Components/homepage/HomePage";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
    </Routes>
  );
}

export default AllRoutes;
