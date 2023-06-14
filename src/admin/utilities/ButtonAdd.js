import React from 'react'

function ButtonAdd({children, handleClick}) {
  return (
    <>
        <button type="button"
            onClick={handleClick}
          className="inline-block
          px-6 py-2.5
            bg-blue-600
            text-white 
            font-medium 
            text-xs 
            leading-tight 
            uppercase 
            rounded-full 
            shadow-md 
            hover:bg-blue-700 
            hover:shadow-lg 
            focus:bg-blue-700 
            focus:shadow-lg 
            focus:outline-none 
            focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">{children}</button>
    </>
  )
}

export default ButtonAdd