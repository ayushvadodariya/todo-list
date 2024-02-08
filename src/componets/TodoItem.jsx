import React, { useEffect, useState } from 'react'
import Btn from './Btn'
import InputFeild from './inputFeild'
import { useDispatch, useSelector } from 'react-redux'
import { editTodo, removeTodo } from '../features/todo/todoSlice'

function TodoItem({todo, workplaceId}) {

  const dispatch = useDispatch()
  const [todoTask, setTodoTask] =useState(todo.task)

  console.log(todo)
  console.log(typeof(todo))

  const handleInputChange = (e)=>{
    setTodoTask(e)
  }

  const handleEditBtn= ()=>{
    const newTodo = {...todo , editable:!todo.editable}
    dispatch(editTodo({workplaceId:workplaceId, todo:newTodo}))
  }

  const handleDoneBtn = ()=>{
    const editedTodo = {...todo, task:todoTask , editable:!todo.editable}
    console.log(editTodo)
    dispatch(editTodo({workplaceId:workplaceId, todo:editedTodo}))
  }


  const handleRemoveTodo = ()=>{
    console.log(todo)
    console.log(workplaceId)
    dispatch(removeTodo({todoId:todo.id,workplaceId:workplaceId}))
  }

 
  return (
    <div className='w-full h-10 my-2 p-1 bg-slate-200 
    flex gap-2 justify-between
    rounded-sm
    '>
      <InputFeild
      type='text'
      readOnly={!todo.editable}
      value={todoTask}
      onChange={handleInputChange}
      className= {`text-start ${(todo.editable) ? `outline-1` :`outline-0`} outline-black`}
      outline={todo.editable}
      />

      <div className='flex gap-1'>
        {
          (todo.editable) ? 
          <Btn 
          title="Done" 
          onClick={handleDoneBtn}
          className={' bg-slate-600'}
          />
          :
          <Btn 
          title="Edit" 
          onClick={handleEditBtn}
          className={' bg-slate-600'}
          />
        }
        

        <Btn 
        title="Remove" 
        onClick={handleRemoveTodo}
        className={' bg-red-600 text-white'}
        />
      </div>


      
    </div>
  )
}

export default TodoItem