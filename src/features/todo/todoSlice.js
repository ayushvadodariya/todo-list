import { createSlice , nanoid} from "@reduxjs/toolkit";



const initialState ={
  workplaceList:[
    {
    id:1,
    title:"default Workplace",
    description:"default description",
    todos : [{
      id:1,
      task:'default Task to',
      editable:false,
      complete:false,
    }]
  },
  {
    id:2,
    title:"default Workplace2",
    description:"default description2",
    todos : [{
      id:1,
      task:'default Task to1',
      editable:false,
      complete:false,
    },
    {
      id:1,
      task:'default Task to2',
      editable:false,
      complete:false,
    }
  ]
  }

  ]
} 

export const todoSlice = createSlice({
  name: 'todo',
  initialState: initialState,
  reducers:{

    addWorkplace :(state, action)=>{
      state.workplaceList = state.workplaceList.push({
        id:nanoid(),
        title:action.payload.title,
        description:action.payload.description ?? "defalu workplace description",
        todos:[{
          task:'default Task to',
          editable:false,
          complete:false,
        }]
      })
    },

    removeWorkplace:(state, action)=>{
      state.workplaceList.filter((workplace)=> workplace.id !==action.payload.workplaceId)
    },

    addTodo: (state, action)=>{
      const workplaceId = action.payload.workplaceId
      const task = action.payload.task
      state.workplaceList.map((workplace)=>(
        (workplace.id == workplaceId) ?
        workplace.todos.push({
          id:nanoid(),
          task:task,
          editable:false,
          complete:false
        })
        :workplace
      ))

      // state.todos.push({
      //   id:nanoid(),
      //   task:action.payload.task,
      //   editable:false,
      //   complete:false
      // })
    },

    removeTodo:(state, action)=>{

      const todoId = action.payload.todoId 
      const workplaceId = action.payload.workplaceId
      console.log("in remove todo")
      
      state.workplaceList = state.workplaceList.map((workplace)=>{
        if(workplace.id == workplaceId){
          workplace.todos = workplace.todos.filter((todo)=>todo.id != todoId)
        }
        return workplace
    })


    //  state.todos =  state.todos.filter((todo)=>{
    //     return (todo.id === action.payload.id) ? false : true
    //   })
    },

    editTodo: (state, action)=>{

      const workplaceId = action.payload.workplaceId

      state.workplaceList = state.workplaceList.map((workplace)=>{
        if(workplace.id == workplaceId){
          workplace.todos = workplace.todos.map((todo)=>(
            (todo.id == action.payload.todo.id) ? action.payload.todo : todo
          ))
        }
        return workplace
      })


      // state.todos = state.todos.map((todo)=>{
      //  return (todo.id === action.payload.id) ? action.payload : todo
      // })
    },

  }

})


export const {addTodo, removeTodo, editTodo} = todoSlice.actions
export default todoSlice.reducer