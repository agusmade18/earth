import React from "react";
import logo from "../../../assets/images/logo.png";
import "./style.css";
import { MdHomeFilled, MdPermIdentity, MdOtherHouses } from "react-icons/md";

function index() {
  const menus = [
    {
      name: "Home",
      link: "/",
      icon: <MdHomeFilled />,
    },
    {
      name: "Profil",
      link: "/",
      icon: <MdPermIdentity />,
    },
    {
      name: "Contact Us",
      link: "/",
      icon: <MdOtherHouses />,
    },
  ];
  return (
    <div className="header justify-between">
      <div className="logo">
        <a href="#">
          <img src={logo} />
        </a>
      </div>
      <div className="menubar">
        <div className="menu-items space-x-6">
          {menus.map((menu, i) => (
            <a key={i} className=" space-x-1">
              <div className="space-x-1">
                <span>{menu.icon}</span>
                <p>{menu.name}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default index;
