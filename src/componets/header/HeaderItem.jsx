import React, { useState } from 'react'

function HeaderItem({text}) {
  return (
    <div
     className='div py-2 px-2
      rounded-md
       hover:bg-headerColorLight hover:shadow-sm hover:scale-90
      '>
      <p className=' capitalize'>{text}</p>
    </div>
  )
}

export default HeaderItem