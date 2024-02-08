import React, { useState } from 'react'

function InputFeild({
  onChange, 
  placeholder='Enter text',
  readOnly=false,
  value="",
  className,
  outline=true 
}) {


  const handleChange = (e)=>{
    onChange(e.target.value)
  }

  return (
    <div className='flex w-full h-full items-center'>
      <input 
      type='text'
      placeholder={placeholder}
      value={value}
      readOnly={readOnly}
      onChange={handleChange}
      className={`h-full w-full px-2  bg-transparent 
      text-center text-black font-mono
      rounded-md 
      ${(outline) ?"outline outline-0 outline-black hover:outline-1 focus:outline-2" : ''}  
      ${className}`}
      />
    </div>
  )
}

export default InputFeild