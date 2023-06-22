import React, { useState } from "react";
import Header from "./header/Header";
import NavBottom from "./nav-bottom/NavBottom";
import Navbar from "./navbar/Navbar";
import NavShadow from "./navbar/NavShadow";

const Main = ({ children }) => {
  const [showNav, setShowNav] = useState(false);
  const navClick = () => {
    setShowNav(!showNav);
  };

  const closeNav = () => {
    setShowNav(false);
  };
  return (
    <div className="w-full h-screen relative top-0 left-0">
      <div
        className={`fixed w-full h-screen z-40 ${showNav ? "block" : "hidden"}`}
      >
        <NavShadow closeNav={closeNav} />
      </div>
      <Header />
      <div className="relative top-[5.1rem] left-0 w-full p-0 m-0">
        {children}
      </div>
      <div
        className={`md:opacity-0 fixed top-0 left-0 w-[70%] h-screen z-50 transform duration-700 ${
          showNav ? "translate-x-0" : "-translate-x-[100rem]"
        }`}
      >
        <Navbar closeNav={closeNav} showNav={showNav} />
      </div>
      <div className="md:hidden block">
        <NavBottom navClick={navClick} />
      </div>
    </div>
  );
};

export default Main;
