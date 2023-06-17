import React, { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { FaPhone } from "react-icons/fa";

function Navbar() {
  const [menuBtn, setMenuBtn] = useState(false);
  const menuDesktop = [
    { name: "ホーム", link: "/" },
    { name: "施工事例", link: "/constructions" },
    { name: "Q＆A", link: "/qa" },
    { name: "お問合せ", link: "/contact" },
  ];
  const showPhone = process.env.REACT_APP_COMPANYPHONE;
  const phone = process.env.REACT_APP_PHONE;

  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;
  return (
    <React.Fragment>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center justify-between">
              <div className="flex-shrink-0 mb-3 mt-3">
                {/* <h1　className='leading-tight text-3xl text-slate-300 font-bold'>{process.env.REACT_APP_COMPANYNAME}</h1> */}
                {/* <div class="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent"> */}
                <a
                  className="
                        flex
                        items-center
                        text-gray-900
                        hover:text-gray-900
                        focus:text-gray-900
                        mt-2
                        lg:mt-0
                        mr-1
                      "
                  href="#"
                >
                  <img
                    src="../../logo.png"
                    className=" w-36"
                    alt=""
                    loading="lazy"
                  />
                </a>
                {/* <h1　className='leading-tight text-3xl text-slate-300 font-bold'>{process.env.REACT_APP_COMPANYNAME}</h1> */}
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {menuDesktop.map((menu, index) => (
                    <a
                      href={menu.link}
                      as={Link}
                      key={index}
                      className={`${
                        pathname === menu.link ? "bg-light-white" : ""
                      } hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium`}
                    >
                      {menu.name}
                    </a>
                  ))}
                  <a href={`tel:${phone}`}>
                    <button
                      type="button"
                      className="inline-flex items-center px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      <FaPhone />
                      <span className="ml-2"> {showPhone} </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => {
                  setMenuBtn(!menuBtn);
                }}
              >
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {menuBtn && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuDesktop.map((menu, index) => (
                <a
                  href={menu.link}
                  as={Link}
                  key={index}
                  className={`${
                    pathname === menu.link ? "bg-gray-700" : ""
                  } hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium`}
                >
                  {menu.name}
                </a>
              ))}
              <a href={`tel:${phone}`}>
                <button
                  type="button"
                  className="inline-flex items-center px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out"
                >
                  <FaPhone />
                  <span className="ml-2"> {showPhone} </span>
                </button>
              </a>
            </div>
          </div>
        )}
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
