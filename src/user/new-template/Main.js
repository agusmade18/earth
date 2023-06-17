import React, { useState } from "react";
import Header from "./header/Header";
import NavBottom from "./nav-bottom/NavBottom";
import Navbar from "./navbar/Navbar";

const Main = ({ children }) => {
  const [showNav, setShowNav] = useState(false);
  const navClick = () => {
    setShowNav(true);
  };

  const closeNav = () => {
    setShowNav(false);
  };
  return (
    <div className="w-full h-screen relative top-0 left-0">
      <Header />
      <div className="relative top-[5.5rem] left-0">{children}</div>
      {showNav && <Navbar closeNav={closeNav} />}

      <div className="md:hidden block">
        <NavBottom navClick={navClick} />
      </div>
    </div>
  );
};

export default Main;
