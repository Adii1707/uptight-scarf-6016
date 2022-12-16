import React from "react";
import Productpage1 from "../Pages/Productpage1";
import { Routes, Route } from "react-router-dom";
import Productpage2 from "../Pages/Productpage2";
export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/products1" element={<Productpage1 />}></Route>
        <Route path="/products2" element={<Productpage2 />}></Route>
      </Routes>
    </div>
  );
};
