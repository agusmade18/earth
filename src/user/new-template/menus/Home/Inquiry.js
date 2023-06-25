import React from "react";
import to1 from "../../../../assets/images/to1.png";
import to2 from "../../../../assets/images/to2.png";
import to3 from "../../../../assets/images/to3.png";
import to4 from "../../../../assets/images/to4.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import {
  FaPhoneSquareAlt,
  FaFacebookSquare,
  FaTwitterSquare,
  FaEnvelope,
} from "react-icons/fa";

function Inquiry() {
  const imgs = [to1, to2, to3, to4];
  return (
    <div className="bg-malibu-900 px-2 w-full h-full py-10 mt-2">
      <div className="flex justify-center items-center px-3 space-x-2 pb-10">
        <div className="w-[10%] bg-malibu-50 rounded-2xl h-1"></div>
        <p className="w-fit text-center text-malibu-50 font-extrabold text-2xl md:text-4xl">
          お問い合わせの流れ
        </p>
        <div className="w-[10%] bg-malibu-50 rounded-2xl h-1"></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
        {imgs.map((img, i) => (
          <LazyLoadImage key={i} src={img} effect="blur" className="w-full" />
        ))}
      </div>
      <div className="w-[95%] md:w-[50%] mx-auto h-fit border border-malibu-100 rounded-xl mt-5 flex flex-col bg-malibu-700 p-3 justify-center items-center">
        <p className="text-lg md:text-xl text-malibu-50 font-extrabold text-center">
          お気軽にお問い合わせください。いいな　みなおし
        </p>
        <div className="flex justify-center items-center space-x-2 ">
          <span className="text-3xl text-malibu-100 flex justify-center items-center h-full mt-4">
            <FaPhoneSquareAlt />
          </span>
          <p className="text-2xl font-Montserrat tracking-widest font-extrabold text-malibu-50 mt-5">
            0120-17-3704
          </p>
        </div>
        <p className="text-base md:text-lg mt-2 text-malibu-50">
          受付時間 9:00-18:00 [ 土・日・祝日除く ]
        </p>
        <div className="w-full flex justify-center items-center mt-3">
          <button className="px-4 py-2 flex justify-center items-center space-x-2 bg-malibu-300 text-malibu-800 font-extrabold shadow-lg border border-malibu-100 rounded-xl hover:scale-95 hover:bg-malibu-200">
            <span>
              <FaEnvelope />
            </span>
            <p>お問い合わせください</p>
          </button>
        </div>
        <div className="flex justify-center items-center w-full mt-5 space-x-3">
          <button className="bg-[#1877F2] pl-5 rounded-md w-[50%] flex justify-start items-center space-x-1 px-2 py-1 text-malibu-50 hover:scale-95">
            <span>
              <FaFacebookSquare />
            </span>
            <p>Facebook</p>
          </button>
          <button className="bg-[#00acee] pl-5  w-[50%] rounded-md flex justify-start items-center space-x-1 px-2 py-1 text-malibu-50 hover:scale-95">
            <span>
              <FaTwitterSquare />
            </span>
            <p>twitter</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Inquiry;
