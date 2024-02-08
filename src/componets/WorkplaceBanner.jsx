import React, { useState } from 'react'

function WorkplaceBanner({workplace}) {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div
    onMouseEnter={()=>{setIsHovered(true)}}
    onMouseLeave={()=>{setIsHovered(false)}}

     className={`w-full my-2
     outline outline-1 outline-black rounded-md
      hover:shadow-sm hover:shadow-black
     transition-all duration-2000
     ${(isHovered) ? 'h-fit' : 'h-14'}
      `}>
      <div className=' px-2
      flex flex-row justify-between items-center'>
        <div>
          <h1 className=' text-black text-lg
           font-mono font-bold'>{workplace.title}</h1>
          <h1 className=' text-gray-900'>{workplace.description}</h1>
          {isHovered && (
            <div>
              you just hover this feild why?
            </div>  
          )}
          
        </div>
        <div className='p-2'>{(isHovered) ? '^' : '>'}</div>
      </div>
    </div>
  )
}

export default WorkplaceBanner