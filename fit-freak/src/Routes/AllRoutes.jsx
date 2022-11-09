import React from "react";
import { Route,Routes } from "react-router-dom";
import Cart from "../Pages/Cart/Cart";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import PrivateRoute from "./PrivateRoute";
import Store from "../Pages/Store/Store";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/store" element={<Store/>}></Route>
      <Route path="/cart" element={<PrivateRoute><Cart/></PrivateRoute>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/store" element={<Store/>}></Route>
    </Routes>
  )
};

export default AllRoutes;