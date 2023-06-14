import React, { useState, useEffect } from 'react'
import {FaAngleDoubleDown} from 'react-icons/fa'
import Api from '../../../api';

function Construction() {

    const [constructions, setContructions] = useState([]);

    const fetchData = async () => {
        await Api.get(`/api/web/construction`,).then(response => {
            setContructions(response.data.data);
        })
      }

    useEffect(() => {
        fetchData();
    }, [])

  return (
    <React.Fragment>
        <div>
            <p className='text-5xl text-gray-800 text-center p-8 mt-10 mb-10 font-extrabold'>施工事例</p>
            <div className="container mx-auto text-center">
                <div className="grid grid-cols-1">
                    {/* Looping */}
                    {
                    constructions.map((data, i) => (
                        <div key={i} className="card bg-white p-5 cursor-pointer hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
                            <div className='flex flex-col md:flex-row justify-center'>
                                <div className='flex flex-col'>
                                    <div className='relative ml-auto mr-auto'>
                                        <img src={data.img_before} className='w-96 h-80' />
                                        <h3 className="absolute text-2xl border border-solid rounded-lg p-3 bg-gray-800 text-white top-5 right-5">Before</h3>
                                    </div>
                                    <div className='ml-auto mr-auto mt-5 mb-5 text-7xl text-orange-500'>
                                        <FaAngleDoubleDown />
                                    </div>
                                    <div className='relative ml-auto mr-auto'>
                                        <img src={data.img_after} className='w-96 h-80' />
                                        <h3 className="absolute text-2xl border border-solid rounded-lg p-3 bg-gray-800 text-white top-5 left-5">After</h3>
                                    </div>
                                </div>
                                <div className='md:ml-4 mt-5 md:mb-auto md:text-left md:w-96 md:mt-auto'>
                                    <div className='w-full border-b-4 border-b-blue-900'>
                                        <p className='text-4xl text-blue-900 pb-5 font-extrabold'>{data.title}</p>
                                    </div>
                                    <p className='text-blue-900 mt-5 font-normal text-lg'>
                                        {data.description}
                                    </p>
                                    <div className='border border-white bg-gray-800 p-5 text-white mt-5 rounded-full text-lg'>
                                        <p>{data.price}</p>
                                        <p>{data.day_work}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))
                    }
                    {/* -------------- */}
                </div>
            </div>
        </div>
        
    </React.Fragment>
  )
}

export default Construction