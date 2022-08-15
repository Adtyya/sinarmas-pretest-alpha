import React from "react";
import CountUp from "react-countup";

const Card = ({ color, dotColor, title, count, extras }) => {
  let customClass;
  if (color == "green") {
    customClass =
      "bg-green-500 relative px-5 py-2 rounded text-white overflow-hidden shadow-lg shadow-green-500";
  } else if (color == "blue") {
    customClass =
      "bg-blue-500 relative px-5 py-2 rounded text-white overflow-hidden shadow-lg shadow-blue-500";
  } else if (color == "red") {
    customClass =
      "bg-red-500 relative px-5 py-2 rounded text-white overflow-hidden shadow-lg shadow-red-500";
  }

  return (
    <div className={customClass}>
      <div
        className={`${
          dotColor === "white" ? "bg-white" : `bg-${dotColor}-500`
        } w-64 h-8 absolute rounded-full bg-opacity-20 top-1 left-1`}
      ></div>
      <div className="relative z-10 space-y-2">
        <p className="text-is-m font-normal">{title}</p>
        <p className="text-normal">
          <CountUp end={count} duration={1.4} /> <span>{extras}</span>
        </p>
      </div>
    </div>
  );
};

export default React.memo(Card);
