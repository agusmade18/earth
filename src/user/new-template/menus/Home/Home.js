import React, { useEffect } from "react";
import Main from "../../Main";
import img1 from "../../../../assets/images/img-1.jpeg";
import img2 from "../../../../assets/images/img-2.jpeg";
import img3 from "../../../../assets/images/img-3.jpeg";
import img1Ph from "../../../../assets/images/img-1Ph.jpeg";
import img2Ph from "../../../../assets/images/img-2Ph.jpeg";
import img3Ph from "../../../../assets/images/img-3Ph.jpeg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import WOW from "wowjs";
import "animate.css";

function Home() {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <>
      <Main>
        <LazyLoadImage
          className="relative top-0 left-0 w-full bg-cover h-36 bg-center md:h-[30rem] wow animate__animated animate__zoomIn"
          style={{ backgroundImage: `url(${img1})` }}
        >
          {/* <LazyLoadImage
            src={img1}
            alt="Image Header"
            className="w-full h-36 "
          /> */}
        </LazyLoadImage>

        <div className="relative w-full rounded-t-3xl bg-malibu-900 -top-10 md:-top-20 h-full boxShadow">
          <div className="flex flex-wrap-reverse justify-center items-center w-full text-malibu-50">
            <div className="relative top-3 left-0 w-full md:w-1/2 h-[23rem] md:h-[28rem] overflow-hidden wow animate__animated animate__zoomIn">
              <div className="absolute top-10 left-0 w-full px-4 h-full">
                <LazyLoadImage
                  src={img2}
                  effect="blur"
                  alt="Image 2"
                  placeholderSrc={img2Ph}
                  className="w-[12rem] md:w-[20rem] rounded-2xl -rotate-12"
                />
              </div>
              <div className="absolute top-[5rem] left-[10rem] md:left-[20rem] w-full px-4">
                <LazyLoadImage
                  src={img3}
                  effect="blur"
                  placeholderSrc={img3Ph}
                  alt="Image 2"
                  className="w-[12rem] md:w-[20rem] rounded-2xl rotate-12"
                />
              </div>
              <div className="absolute top-[12rem] left-0 w-full px-4">
                <LazyLoadImage
                  src={img1}
                  placeholderSrc={img1Ph}
                  effect="blur"
                  alt="Image 2"
                  className="w-[12rem] md:w-[20rem] rounded-2xl rotate-3"
                />
              </div>
            </div>
            <div className="relative w-full md:w-1/2 top-5 flex flex-col items-center justify-start text-lg md:text-3xl text-center px-4 font-extrabold wow animate__animated animate__zoomIn">
              <p>ファイナンシャルプランニング業務と</p>
              <p>リノベーションを</p>
              <p>兼ね備えた建築・資産設計プランニング会社</p>

              <p className="mt-7">
                お客様のニーズに合わせた住まいや建物の設計から
              </p>
              <p>リフォーム・リノベーション・家計の資産アドバイスまで</p>
              <p>幅広くサポートしています</p>
              <div className="flex w-full justify-center items-center mt-5 py-2 md:py-5 md:pb-10 wow animate__animated animate__zoomIn">
                <button className="btn shadow-xl hover:bg-malibu-400 hover:scale-95 transition duration-800 text-lg">
                  みなおしハウジングの特徴
                </button>
              </div>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
}

export default Home;
