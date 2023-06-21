import React from "react";
import Slider from "react-slick";
import car1 from "../../../../assets/images/car1.png";
import car2 from "../../../../assets/images/car2.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WOW from "wowjs";
import "animate.css";

function SlidePage() {
  const settings = {
    // dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
  };
  return (
    <>
      <div className="relative top-[15rem] md:top-[16rem] w-full h-fit overflow-hidden pb-10">
        <div className="w-full h-full flex flex-col justify-center items-center wow animate__animated animate__zoomIn">
          <div className="bg-malibu-950 w-1/2 mb-2 rounded-full h-1"></div>
          <p className="text-2xl md:text-4xl font-extrabold">NEW サービス</p>
          <div className="bg-malibu-950 w-1/2 mt-2 rounded-full h-1"></div>
        </div>
        <div className="wow animate__animated animate__zoomIn mt-3">
          <Slider {...settings}>
            <LazyLoadImage src={car1} className="w-full" />
            <LazyLoadImage src={car2} className="w-full" />
          </Slider>
        </div>
      </div>
    </>
  );
}

export default SlidePage;
