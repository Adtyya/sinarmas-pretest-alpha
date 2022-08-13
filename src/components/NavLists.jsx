import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaRegUser,
  FaRegSmile,
  FaRegMoneyBillAlt,
  FaListUl,
} from "react-icons/fa";

const isIcon = {
  FaRegSmile: <FaRegSmile />,
  FaRegUser: <FaRegUser />,
  FaRegMoneyBillAlt: <FaRegMoneyBillAlt />,
  FaListUl: <FaListUl />,
};

const Icons = ({ iconName }) => {
  const Element = isIcon[iconName];
  return Element;
};

const NavLinks = ({ name, path, icon }) => {
  const curent = useLocation();
  return (
    <Link to={path}>
      <div
        className={`relative flex items-center space-x-3 my-3 ${
          curent.pathname == path && "bg-red-500 text-white shadow-lg"
        } p-1 rounded text-black`}
      >
        <span className="text-is-s">
          <Icons iconName={icon} />
        </span>
        <span className="text-is-s whitespace-nowrap">{name}</span>
      </div>
    </Link>
  );
};

export default NavLinks;
