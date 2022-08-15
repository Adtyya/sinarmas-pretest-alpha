import React from "react";
import GuestLayout from "../components/GuestLayout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Label from "../components/Label";
import Input from "../components/Input";

const LoginScreen = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [count, setCount] = useState(0);

  const handleData = (event) => {
    setData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/add-staff");
  };

  return (
    <GuestLayout>
      <div className="w-full max-w-xs bg-white p-4 rounded shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <Label htmlFor={"email"} labelName="Email" />
            <Input
              inputName="email"
              type="text"
              handleChange={handleData}
              placeholder={"admin@mail.com"}
            />
          </div>
          <div className="mb-2">
            <Label htmlFor={"password"} labelName="Password" />
            <Input
              inputName="password"
              type="text"
              handleChange={handleData}
              placeholder={"*******"}
            />
          </div>
          <button className="mt-3 text-is-s bg-red-500 px-3 py-1 text-white rounded">
            Login
          </button>
        </form>
      </div>
    </GuestLayout>
  );
};

export default LoginScreen;
