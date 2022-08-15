import React from "react";
import { useState, useRef, useMemo } from "react";
import { FaAlignJustify } from "react-icons/fa";
import NavLinks from "./NavLists";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);

  const navList = useMemo(() => {
    return [
      {
        name: "Add Staff",
        path: "/add-staff",
        icon: "FaRegUser",
      },
      {
        name: "Add Customer",
        path: "/add-customer",
        icon: "FaRegSmile",
      },
      {
        name: "Money Lending",
        path: "/money-lending-customer",
        icon: "FaRegMoneyBillAlt",
      },
      {
        name: "Reports",
        path: "/reports-all-customer",
        icon: "FaListUl",
      },
    ];
  });

  return (
    <div className="w-full h-auto block lg:flex">
      <span
        className="absolute right-3 top-3 bg-gray-300 p-1 rounded lg:hidden z-[999] text-is-xl text-black cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      >
        <FaAlignJustify />
      </span>
      <header className="absolute z-[99] left-0 lg:static bg-white shadow-xl lg:h-auto">
        <div
          className={`${
            open ? "w-screen visible opacity-100" : "w-0 invisible opacity-0"
          } lg:w-48 2xl:w-60 lg:visible duration-500 min-h-screen lg:opacity-100 lg:px-5 py-8 sticky top-0`}
        >
          <div className="p-3 lg:p-0">
            <h1
              className={`text-is-xl 2xl:text-4xl origin-left ${
                !open && "scale-0 duration-500"
              } lg:scale-100`}
            >
              <span className="text-red-500">sinar</span>
              mas
            </h1>
            {navList.map((el, i) => (
              <div key={i}>
                <NavLinks name={el.name} icon={el.icon} path={el.path} />
              </div>
            ))}
          </div>
        </div>
      </header>
      <div className="lg:m-5 bg-gray-50 min-h-screen rounded w-full">
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
};

export default React.memo(Layout);
