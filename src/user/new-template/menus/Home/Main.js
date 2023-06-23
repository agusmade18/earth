import React from "react";
import MainTemplate from "../../Main";
import Home from "./Home";
import Section3 from "./Section3";
import SlidePage from "./SlidePage";
import EmptySpace from "./EmptySpace";
import Inquiry from "./Inquiry";

function Main() {
  return (
    <MainTemplate>
      <div className="relative top-0 left-0 w-full">
        <Home />
        <Section3 />
        <SlidePage />
        <Inquiry />
        <EmptySpace />
      </div>
    </MainTemplate>
  );
}

export default Main;
