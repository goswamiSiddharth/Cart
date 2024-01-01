import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
    <ToastContainer theme='colored' position='top-center'></ToastContainer>
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/login"} element={<Login />}></Route>
        <Route path={"/register"} element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
