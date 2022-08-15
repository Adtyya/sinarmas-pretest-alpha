import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/index";
import LoginScreen from "./screens/login";
import AddCustomer from "./screens/addCustomer";
import MoneyLending from "./screens/MoneyLending";
import Reports from "./screens/Reports";
import Layout from "./components/Layout";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/add-staff" element={<HomeScreen />} />
        <Route path="/add-customer" element={<AddCustomer />} />
        <Route path="/money-lending-customer" element={<MoneyLending />} />
        <Route path="/reports-all-customer" element={<Reports />} />
      </Routes>
    </>
  );
};

export default AppRouter;
