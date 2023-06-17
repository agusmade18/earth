import React, { useState } from "react";
import logo from "../../../assets/images/logo.png";
import "./style.css";
import { MdHomeFilled, MdPermIdentity, MdOtherHouses } from "react-icons/md";

function Header() {
  const menus = [
    {
      name: "会社概要",
      link: "/",
      icon: <MdHomeFilled />,
    },
    {
      name: "サービス紹介",
      link: "/service",
      icon: <MdPermIdentity />,
    },
    {
      name: "実績紹介",
      link: "/actual-introduction",
      icon: <MdOtherHouses />,
    },
    {
      name: "採用情報",
      link: "/recruitment-information",
      icon: <MdOtherHouses />,
    },
    {
      name: "協力会社募集",
      link: "/recruitment-partner",
      icon: <MdOtherHouses />,
    },
    {
      name: "Q＆A",
      link: "/QA",
      icon: <MdOtherHouses />,
    },
    {
      name: "お問い合わせ",
      link: "/inquiry",
      icon: <MdOtherHouses />,
    },
  ];
  return (
    <>
      <header className="fixed top-0 left-0 w-full h-[80px] z-50">
        <div className="bg-white p-3 w-full h-full boxShadow flex justify-between items-center">
          <div className="md:px-3 px-5 py-10 w-full flex justify-center items-center md:w-fit">
            <img src={logo} className="w-[15rem]" />
          </div>

          <nav className="hidden opacity-0 md:flex md:opacity-100 justify-center items-center">
            <ul className=" space-x-3 text-sm font-bold overflow-x-auto whitespace-nowrap">
              {menus.map((menu, i) => (
                <a href={menu.link} key={i}>
                  <li className="inline-block pb-1 transition duration-500 border-b-2 border-transparent hover:border-malibu-400 cursor-pointer">
                    {menu.name}
                  </li>
                </a>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
