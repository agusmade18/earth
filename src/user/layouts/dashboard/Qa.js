import React, { useState, useEffect } from 'react'
import {GrChatOption} from 'react-icons/gr'
import Api from '../../../api'

function Qa({bgColor, titleColor, answerColor}) {

    const [arrayFirstHalf, setArrayFirstHalf] = useState([]);
    const [arraySecondHalf, setArraySecondHalf] = useState([]);

    const fetchData = async () => {
        await Api.get(`/api/web/qa`,).then(response => {
            let qa = response.data.data;
            let halfwayThrough = Math.floor(qa.length / 2)
            setArrayFirstHalf(qa.slice(0, halfwayThrough));
            setArraySecondHalf(qa.slice(halfwayThrough, qa.length));
        })
      }

    useEffect(() => {
        fetchData();
    }, [])
    
    
  return (
    <React.Fragment>
        <div className={`${bgColor} p-5 mt-10`}>
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <h2 className={`mb-8 text-4xl tracking-tight font-extrabold ${titleColor}`}>よくあるご質問</h2>
                <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
                    <div>
                    {
                        arrayFirstHalf.map((data, i) => (
                            <div className="mb-10" key={i}>
                                <h3 className={`flex items-center mb-4 text-lg font-medium ${titleColor}`}>
                                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                                    {data.question}
                                </h3>
                                <p className={`${answerColor}`}>{data.answer}</p>
                            </div>
                        ))
                    }
                    </div>
                    <div>
                    {
                        arraySecondHalf.map((data, i) => (
                            <div className="mb-10" key={i}>
                                <h3 className={`flex items-center mb-4 text-lg font-medium ${titleColor}`}>
                                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                                    {data.question}
                                </h3>
                                <p className={`${answerColor}`}>{data.answer}</p>
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Qa