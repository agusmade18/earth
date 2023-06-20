import React, { useState } from "react";
import logo from "../../../assets/images/logo.png";
import "./style.css";
import { Menus } from "../menus/MenuLists";

function Header() {
  const menus = Menus;
  return (
    <>
      <header className="fixed top-0 left-0 w-full h-[80px] z-30">
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
