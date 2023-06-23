import React from "react";

function Footer() {
  return (
    <div className="w-full h-fit p-3 bg-malibu-50 text-malibu-900 py-10 font-Montserrat">
      <p className="text-xs text-center font-bold">
        Copyright © みなおしハウジング All Rights Reserved.
      </p>
      <div className="bg-malibu-900 w-[90%] h-[0.1rem] mt-2 mx-auto"></div>
      <p className=" text-[10px] text-center mt-2 italic">
        Powered by AM with React & Tailwind Technology.
      </p>
    </div>
  );
}

export default Footer;
