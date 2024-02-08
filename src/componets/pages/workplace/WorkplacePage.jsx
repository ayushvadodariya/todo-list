import React from 'react'
import { useSelector } from 'react-redux'
import WorkplaceBanner from '../../WorkplaceBanner'
import { NavLink } from 'react-router-dom'
import WorkPlaceLayout from '../../layout/WorkLayout'

function WorkplacePage() {

  const workplaceList = useSelector((state)=>state.workplaceList)

  return (
    <div className='w-full h-full py-7 px-3 mt-5'>
     <div className='flex gap-1 items-center'>
      <h1 className=' font-title font-semibold
      text-2xl text-black'>Workplace</h1>
      <div className=' inline-block h-10 w-10 bg-fuchsia-300 
       rounded-full'>
        <div className=' m-auto'>
          +
        </div>
       </div>
     </div> 


      <div className='py-3 min-w-max w-2/5'>
        {workplaceList.map((workplace)=>(
          <NavLink to={`${workplace.id}`} key={workplace.id}>
            <WorkplaceBanner workplace={workplace}/>
          </NavLink>
        ))
    }
      </div>
    </div>

  )
}

export default WorkplacePage