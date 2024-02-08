import React from 'react'

function Btn({title, onClick, className}) {
  return (
    <button
    onClick={onClick}
    className={` w-full h-full px-3 bg-lime-600  rounded-md shadow-sm
    text-white font-mono font-bold  ${className} `}>
      {title}
    </button>
  )
}

export default Btn