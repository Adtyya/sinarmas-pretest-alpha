import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/index";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/dashboard" element={<>helo 2</>} />
    </Routes>
  );
};

export default AppRouter;
