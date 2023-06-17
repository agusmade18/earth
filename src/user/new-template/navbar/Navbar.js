import React from "react";

function Navbar({ closeNav }) {
  return (
    <div className="fixed top-0 left-0 w-[70%] h-screen z-50">
      <div className="w-full h-full bg-malibu-400">
        <button
          onClick={() => {
            closeNav();
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Navbar;
