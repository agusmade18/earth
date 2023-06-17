import React, { useEffect } from "react";
import {
  FaList,
  FaHome,
  FaBuilding,
  FaEnvelope,
  FaPhoneVolume,
} from "react-icons/fa";

function NavBottom({ navClick }) {
  const navBottoms = [
    {
      name: "サービス",
      link: "/",
      icon: <FaList />,
      onClick: navClick,
      // navClick: navClick,
    },
    {
      name: "ホーム",
      link: "/",
      icon: <FaHome />,
    },
    {
      name: "会社員",
      link: "/",
      icon: <FaBuilding />,
    },
    {
      name: "問い合わせ",
      link: "/",
      icon: <FaEnvelope />,
    },
    {
      name: "TEL",
      link: "/",
      icon: <FaPhoneVolume />,
    },
  ];
  return (
    <div className="fixed bottom-0 left-0 w-full h-16 bg-malibu-400">
      <div className="flex justify-between w-full h-full items-center">
        <ul className="grid grid-cols-5 w-full overflow-auto whitespace-nowrap">
          {navBottoms.map((nav, i) => (
            <li key={i} className="text-malibu-50 text-sm">
              <button
                // href=""
                onClick={() => {
                  nav.onClick();
                }}
                className="text-center flex flex-col justify-center items-center w-full"
              >
                <span className="text-lg pb-2">{nav.icon}</span>
                <p>{nav.name}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NavBottom;
