import React, { useState, useEffect } from 'react'
import LayoutMain from '../layouts/LayoutMain'
import Carousel from '../layouts/Carousel'
import ReactQuill from "react-quill";
// quill CSS
import 'react-quill/dist/quill.snow.css';
import Api from "../../api";
import Card from '../layouts/dashboard/Card';
import Construction from '../layouts/dashboard/Construction';
import Qa from '../layouts/dashboard/Qa';
import EmailForm from '../layouts/dashboard/EmailForm';

function Dashboard() {
    
  return (
    <React.Fragment>
      <LayoutMain>
        <Carousel />
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl text-sky-600 font-bold text-center mt-5"> 「自社工事」だからこそできる！ </h1>
          <p className='text-xl text-black font-bold text-center mt-3'>紹介サイトやフランチャイズ加盟店では不可能な</p>
          <p className='text-xl text-black font-bold text-center mt-3'>低価格」・「柔軟な対応」・「迅速なアフターフォロー」</p>  
          </div>
        </header>
        <div>
          <Card />
          <Construction />
          <Qa bgColor='bg-gray-800' titleColor='text-gray-100' answerColor='text-gray-400' />
          <EmailForm />
        </div>
      </LayoutMain>
    </React.Fragment>
  )
}

export default Dashboard