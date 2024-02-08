import React, { useEffect, useState } from 'react'
import InputFeild from '../../inputFeild'
import Btn from '../../Btn'
import {useDispatch, useSelector} from 'react-redux'
import TodoItem from '../../TodoItem'
import {addTodo} from '../../../features/todo/todoSlice'

function Home() {

  const [todo, setTodo] = useState("")
  const dispatch = useDispatch()
  const todoList = useSelector(state =>state.todos)
  console.log(todoList)
  const handleChange = (value)=>{
    setTodo(value)
  }

  const handleAddTodo= ()=>{
    dispatch(addTodo({task:todo}))
  }


  return (
    <div className='w-full h-full py-7'>
      {/* <div className='flex items-center justify-center '>
          <div className="w-3/5 py-2 px-3 flex flex-col gap-2 items-center rounded-md shadow shadow-purple-300 drop-shadow-xl ">
              <div className='flex w-full h-12 gap-2'>
                
                  <div className='w-full h-full bg-gray-800
                  flex
                  rounded-md'>
                    <InputFeild 
                    value={todo} 
                    readOnly={false}
                    onChange={(e)=> handleChange(e)}
                    outline={true}
                    className={"text-white"}
                    />
                  </div>
                  <div className='h-full w-24'>
                    <Btn onClick={handleAddTodo} title="Add"/>
                  </div>

              </div>
              <div className='h-full w-full'>
                {todoList.map((todo)=>(
                  <TodoItem todo={todo} key={todo.id}/>
                ))}
              </div>
          </div>
      </div> */}
    </div>
  )
}

export default Home