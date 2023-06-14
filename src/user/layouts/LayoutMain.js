import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingButton from "./FloatingButton";

const LayoutMain = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      {children}
      <Footer />
      <FloatingButton />
    </React.Fragment>
  );
};

export default LayoutMain;
