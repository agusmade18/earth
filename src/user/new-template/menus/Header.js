import React from "react";
import img1 from "../../../assets/images/img-1.jpeg";

function Header({ children }) {
  return (
    <>
      <div
        className="relative top-0 left-0  w-full min-h-[3rem] h-[5rem] md:h-[10rem] bg-center wow animate__animated animate__zoomIn"
        style={{ backgroundImage: `url(${img1})`, backgroundSize: "cover" }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-malibu-400 to-malibu-950 opacity-50"></div>
        <div className="relative top-0 left-0 flex justify-center items-center w-full h-full">
          <p className="text-2xl md:text-3xl font-Montserrat text-malibu-50 font-extrabold">
            {children}
          </p>
        </div>
      </div>
    </>
  );
}

export default Header;
