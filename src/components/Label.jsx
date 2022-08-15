import React from "react";

const Label = ({ htmlFor, labelName }) => {
  return (
    <label htmlFor={htmlFor} className="text-is-m block mb-3">
      {labelName}
    </label>
  );
};

export default Label;
