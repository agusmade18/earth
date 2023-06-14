import React from 'react'
import {FaBuilding} from 'react-icons/fa'
import {HiCurrencyYen} from 'react-icons/hi'
import {GiRolledCloth} from 'react-icons/gi'
import {FaHandshake} from 'react-icons/fa'
import {GiPiggyBank} from 'react-icons/gi'

function Card() {

    const cardList = [
        {icon:<FaBuilding className='text-white text-7xl w-full mb-3' />, title:"自社施工", title2:"お客様のご要望に最大限ご対応できます！"},
        {icon:<HiCurrencyYen className='text-white text-7xl w-full mb-3' />, title:"厳選した材料", title2:"最大25年のメーカー保証"},
        {icon:<GiRolledCloth className='text-white text-7xl w-full mb-3' />, title:"お見積もり無料", title2:"お客様とのコミュニケーションを重視して最善策をご提案！"},
        {icon:<FaHandshake className='text-white text-7xl w-full mb-3' />, title:"とことん低価格", title2:"業者紹介サイトやフランチャイズ加盟店では不可能な低価格設定！"},
        {icon:<GiPiggyBank className='text-white text-7xl w-full mb-3' />, title:"安心のアフターフォロー", title2:"工事保証期間内（最大10年）の修理は完全無料です!"},
    ]

  return (
    <React.Fragment>
        <div className='bg-gray-800 p-5'>
            <p className='text-5xl text-white text-center p-8 mt-10 mb-10 font-extrabold'>屋根ナビの安心ポイント</p>
        {/* <div className='bg-clip-border bg-sky-800 border-1 border-sky-300 mt-9'>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 1440 319">
                <path fill="#fff" 
                    fillOpacity="1" 
                    d="M0,320L60,288C120,256,240,192,360,170.7C480,149,600,171,720,176C840,181,960,171,1080,144C1200,117,1320,75,1380,53.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
                </path>
            </svg>
        </div> */}

        
            <div className="container mt-4 mx-auto text-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    {
                        cardList.map((data, i)=> (
                            <div key={i} className="card bg-white m-2 h-80 p-5 cursor-pointer border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
                                <div className='inline-flex items-center mb-4 justify-center w-32 h-32 mr-2 transition-colors duration-150 bg-orange-800 rounded-full focus:shadow-outline hover:bg-stone-800 shadow-lg'>
                                    {data.icon}
                                </div>
                                
                                <h5 className="mb-2 text-3xl font-bold tracking-tight text-black">{data.title}</h5>
                                <p className="font-normal text-lg text-gray-700 dark:text-gray-400">{data.title2}</p>
                            </div>
                        ))
                    }
                        
                </div>
            </div>

        </div>
    </React.Fragment>
  )
}

export default Card