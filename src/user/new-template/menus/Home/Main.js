import React from "react";
import MainTemplate from "../../Main";
import Home from "./Home";
import Section3 from "./Section3";
import SlidePage from "./SlidePage";

function Main() {
  return (
    <MainTemplate>
      <div className="relative top-0 left-0 w-full -space-y-5">
        <Home />
        <SlidePage />
        <Section3 />
      </div>
    </MainTemplate>
  );
}

export default Main;
