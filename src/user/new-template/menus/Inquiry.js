import React from "react";
import Main from "../Main";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import img1 from "../../../assets/images/img-1.jpeg";
import Header from "./Header";

function Inquiry() {
  return (
    <Main>
      <div className="bg-malibu-100">
        <Header>お問い合わせ</Header>
        <div className="relative top-0 left-0 p-3 text-base space-y-2">
          <p>お問い合わせありがとうございます。</p>
          <p>3営業日以内に返信致します。</p>
          <p>
            弊社に関すること。採用問い合わせ。お問い合わせはこちらからよろしくお願いいたします。
          </p>
        </div>
        <div className="relative top-0 left-0 p-3 w-full">
          <div className="flex justify-center items-center w-full md:w-[50%] mx-auto border p-2">
            <div className="w-[25%] p-2 border-r-2">
              <p className="text-sm md:text-base">必須お名前</p>
            </div>
            <div className="w-[75%] p-2">
              <input
                type="text"
                placeholder="鈴木 花子"
                className="w-full p-2 rounded-lg"
              />
            </div>
          </div>

          <div className="flex justify-center items-center w-full md:w-[50%] mx-auto border p-2">
            <div className="w-[25%] p-2 border-r-2">
              <p className="text-sm md:text-base">必須メールアドレス</p>
            </div>
            <div className="w-[75%] p-2">
              <input
                type="email"
                placeholder="xxx@gmail.com"
                className="w-full p-2 rounded-lg"
              />
            </div>
          </div>

          <div className="flex justify-center items-center w-full md:w-[50%] mx-auto border p-2">
            <div className="w-[25%] p-2 border-r-2">
              <p className="text-sm md:text-base">必須電話番号</p>
            </div>
            <div className="w-[75%] p-2">
              <input
                type="tel"
                placeholder="090-0000-0000"
                className="w-full p-2 rounded-lg"
              />
            </div>
          </div>

          <div className="flex justify-center items-center w-full md:w-[50%] mx-auto border p-2">
            <div className="w-[25%] p-2 border-r-2">
              <p className="text-sm md:text-base">必須住所</p>
            </div>
            <div className="w-[75%] p-2">
              <input
                type="text"
                placeholder="○○県○○氏○○町○○番地"
                className="w-full p-2 rounded-lg"
              />
            </div>
          </div>

          <div className="flex justify-center items-center w-full md:w-[50%] mx-auto border p-2">
            <div className="w-[25%] p-2 border-r-2">
              <p className="text-sm md:text-base">
                任意電話が受け取りやすい時間{" "}
              </p>
            </div>
            <div className="w-[75%] p-2">
              <input
                type="text"
                placeholder="---"
                className="w-full p-2 rounded-lg"
              />
            </div>
          </div>

          <div className="flex justify-center items-center w-full md:w-[50%] mx-auto border p-2">
            <div className="w-[25%] p-2 border-r-2">
              <p className="text-sm md:text-base">任意備考</p>
            </div>
            <div className="w-[75%] p-2">
              <textarea
                rows={5}
                placeholder="お問い合わせ内容をご記入ください"
                className="w-full p-2 rounded-lg"
              ></textarea>
            </div>
          </div>

          <div className="w-full flex justify-center items-center mt-3">
            <button className="btn shadow-xl text-malibu-50 hover:bg-malibu-400 hover:scale-95 transition duration-800 text-lg">
              上記の内容で送信する
            </button>
          </div>
          <div className="h-[4.5rem]"></div>
        </div>
      </div>
    </Main>
  );
}

export default Inquiry;
