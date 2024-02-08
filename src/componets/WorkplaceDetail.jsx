import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import TodoItem from './TodoItem'
import InputFeild from './inputFeild'
import { useState } from 'react'
import Btn from './Btn'
import { addTodo } from '../features/todo/todoSlice'

function WorkplaceDetail() {
  const workplaceId = useParams().id
  const navigate = useNavigate()

  const workplaceList = useSelector(state => state.workplaceList)
  const workplace = workplaceList.find(workplace => workplace.id.toString() === workplaceId)
  //array of todos on this workplace
  const todos = workplace.todos
  console.log(todos)


  const [todo, setTodo] = useState("")
  const dispatch = useDispatch()
  const handleChange = (value)=>{
    setTodo(value)
  }

  const handleAddTodo= ()=>{
    dispatch(addTodo({task:todo, workplaceId:workplaceId}))
    setTodo("")
  }

  const handleKeyPress = (event)=>{
    if(event.value === 'Enter' && todo !== ''){
      handleAddTodo()
    }
  }

  return (
    <div className='w-full h-full mt-7'>
     <button
     onClick={()=>{
      navigate(-1)
     }}>
        <div className='m-2 p-2 pr-3 max-w-fit rounded-xl bg-slate-900
        text-sm text-white
         hover:shadow-sm hover:shadow-black'>{"< Back"}</div>
     </button>
     <div className='flex items-center justify-center '>
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
                {todos.map((todo)=>(
                  <TodoItem workplaceId={workplaceId} todo={todo} key={todo.id}/>
                ))}
              </div>
          </div>
      </div>
    </div>
  )
}

export default WorkplaceDetail