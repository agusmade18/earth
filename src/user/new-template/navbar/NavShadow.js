import React from "react";

function NavShadow({ closeNav }) {
  return (
    <div
      className="absolute w-full h-screen bg-black opacity-20 z-50"
      onClick={() => {
        closeNav();
      }}
    ></div>
  );
}

export default NavShadow;
