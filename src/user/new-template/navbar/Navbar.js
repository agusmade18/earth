import React from "react";
import { Menus } from "../menus/MenuLists";
import { MdClose } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Navbar({ closeNav }) {
  const menus = Menus;
  return (
    <div className={`w-full h-full bg-malibu-400 text-malibu-50 `}>
      <div className="flex justify-around items-center pl-3 py-4 h-fit">
        <p className="text-xl font-bold text-malibu-200 mt-3">リストメニュー</p>
        <button
          className="text-xl mt-3 text-malibu-100 rounded-full bg-malibu-900 p-1 hover:text-malibu-900 hover:bg-malibu-100"
          onClick={() => {
            closeNav();
          }}
        >
          <MdClose />
        </button>
      </div>
      <div className="flex w-full h-full py-3 justify-start items-start">
        <div className="font-bold pl-3 w-full mr-5 flex flex-col">
          {menus.map((menu, i) => (
            <NavLink
              to={menu.link}
              className={({ isActive }) =>
                isActive
                  ? "activeLink"
                  : "text-lg mx-2 border-t-2 border-malibu-200 py-2 w-full h-fit"
              }
            >
              {menu.name}
            </NavLink>
          ))}
          <div className="text-lg mx-2 border-t-2 border-malibu-200 py-2 w-full h-fit"></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
