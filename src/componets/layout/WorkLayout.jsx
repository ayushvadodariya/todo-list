import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function WorkLayout() {
  return (
    <div className='flex flex-row h-full'>
      <div className=' w-44 h-full py-20 bg-gray-500
       flex flex-col items-center
        '>
        <div className=''>
          <NavLink to={"workplace"}>
            <h1>WorkPlace</h1>
          </NavLink>
          <NavLink to={"reminder"}>
            <h1>Reminder</h1> 
          </NavLink>
        </div>
        
      </div>

      <div className='w-full'>
        <Outlet />
      </div>

    </div>
  )
}

export default WorkLayout