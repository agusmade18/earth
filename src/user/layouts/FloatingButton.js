import React from 'react'
import { FaPhone } from "react-icons/fa"

function FloatingButton() {
  const phone = process.env.REACT_APP_PHONE
  return (
    <React.Fragment>
        <a href={`tel:${phone}`}>
        <button title="Contact Us"
        className="fixed 
            z-90 
            bottom-10 
            right-8
             bg-green-600
             w-14 
             h-14 
             rounded-full 
             drop-shadow-lg 
             flex 
             justify-center 
             items-center
             p-4
              text-white text-4xl
               hover:bg-blue-700 
               hover:drop-shadow-2xl 
               hover:animate-bounce 
               duration-300">
                <FaPhone />
               </button>
               </a>
    </React.Fragment>
  )
}

export default FloatingButton