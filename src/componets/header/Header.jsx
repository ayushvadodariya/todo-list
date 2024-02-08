import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import HeaderItem from './HeaderItem'

function Header() {
  const listHeader = ["home","work"]
  const [logoHover, setLogoHover] = useState(false)

  return (
    <div className=' h-16 px-6 py-2 bg-headerColor 
     text-white shadow-md shadow-gray-800
    flex flex-row justify-between items-center
    '> 
    <NavLink to=''>
      <div>
        <h1 className=' text-white text-3xl 
        font-extrabold font-logo
         hover:scale-95
        '>Todos</h1>
      </div>
    </NavLink>

      <div>
        <div className='flex '>
          {listHeader.map((item)=>{
            return(
              <NavLink to={`${item}`} key={`${item}`}>
                <HeaderItem text={item} />
              </NavLink>
            ) 
          })}
        </div>
      </div>
    </div>
  )
}

export default Header