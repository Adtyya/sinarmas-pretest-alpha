import React from "react";

const Input = ({ inputName, type = "", handleChange, placeholder = "" }) => {
  return (
    <input
      name={inputName}
      type={type}
      className="bg-gray-50 w-full border focus:outline-none px-2 py-1 text-is-s"
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default React.memo(Input);
