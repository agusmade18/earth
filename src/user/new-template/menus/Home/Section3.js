import React from "react";
import img1 from "../../../../assets/images/img-2.jpeg";
import img2 from "../../../../assets/images/img-3.jpeg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { BsArrowRightCircle } from "react-icons/bs";

function Section3() {
  return (
    <div className="relative top-0 w-full h-fit overflow-hidden pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 px-3 md:px-10">
        <div className="relative top-0 left-0">
          <LazyLoadImage
            className="rounded-2xl w-full min-h-[9rem] h-[16rem] md:h-[35rem] bg-center brightness-75 wow animate__animated animate__zoomIn"
            style={{ backgroundImage: `url(${img1})`, backgroundSize: "cover" }}
          ></LazyLoadImage>
          <div className="absolute top-0 left-0 h-full flex flex-col justify-center items-start w-full p-3 font-extrabold">
            <ul className="list-disc ml-4 md:ml-9 space-y-2 md:space-y-4 text-malibu-50 text-base md:text-3xl">
              <li>リノベーション</li>
              <li>間取り図提案</li>
              <li>資産設計・FP相談</li>
              <li>調査申請サポート</li>
              <li>片付け・撤去作業</li>
            </ul>
            <div className="w-full h-1 bg-malibu-50 rounded-2xl mt-3"></div>
            <div className="mt-3 flex w-full justify-center items-center">
              <button className="flex justify-center items-center space-x-3 px-5 py-2 bg-malibu-300 rounded-3xl text-malibu-800 shadow-2xl ring-1 cursor-pointer border-malibu-100 border text-base md:text-lg hover:ring-2 hover:bg-malibu-200">
                <p>会社案内をみる</p>
                <span className="text-malibu-800 font-extrabold">
                  <BsArrowRightCircle />
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="relative top-0 left-0">
          <LazyLoadImage
            className="rounded-2xl w-full min-h-[9rem] h-[16rem] md:h-[35rem] bg-center brightness-75 wow animate__animated animate__zoomIn"
            style={{ backgroundImage: `url(${img2})`, backgroundSize: "cover" }}
          ></LazyLoadImage>
          <div className="absolute top-0 left-0 h-full flex flex-col justify-center items-start w-full p-3 font-extrabold">
            <ul className=" ml-4 md:ml-9 space-y-2 md:space-y-4 text-malibu-50 text-base md:text-3xl">
              <li>みなおしハウジング</li>
              <li>保有資格や経営理念</li>
              <li>企業情報など</li>
            </ul>
            <div className="w-full h-1 bg-malibu-50 rounded-2xl mt-3"></div>
            <div className="mt-3 flex w-full justify-center items-center">
              <button className="flex justify-center items-center space-x-3 px-5 py-2 bg-malibu-300 rounded-3xl text-malibu-800 shadow-2xl ring-1 cursor-pointer border-malibu-100 border text-base md:text-lg hover:ring-2 hover:bg-malibu-200">
                <p>会社案内をみる</p>
                <span className="text-malibu-800 font-extrabold">
                  <BsArrowRightCircle />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
