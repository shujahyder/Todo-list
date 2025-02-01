import { useState } from 'react'
import './App.css'



function App() {
  const [todos, setTodos] = useState([]);
 
  function handlesubmit (event){
    event.preventDefault()

    let task= event.target.task.value

  if (!task){
    alert("Please Provide A Valid Task")
    return
  }

  setTodos([...todos, {task:task,completed:false }])

    event.target.reset()
  }
  function changeTaskStatus(index){
    let newTodos =[...todos]
    newTodos[index].completed = !newTodos[index].completed
    setTodos(newTodos)
  }
  function deleteTask(index){
    let newTodos =[...todos]
    newTodos.splice(index,1)
    setTodos(newTodos)
  }

  return (
    <>
    <div className='container m-4  '>
     <div className='m-auto border border-dark rounded border-5 w-50 bg-info'>
       <h2 className='text-black text-center m-5 fw-bolder display-1'> Todo List</h2>
       <form className="d-flex" onSubmit={handlesubmit}>
        <input className='form-control m-3 bg-info border-dark rounded border-3 ' placeholder="New Task" name='task'/ >
        <button className='btn btn-success h6 me-4  bg-dark' type="submit">Add</button>
      </form>

       {
        todos.map((todo,index) =>{
          return (
            <div key={index} className='rounded m-4 p-2 d-flex' 
            style={{backgroundColor:todo.completed ? "#87FC68" : "lightgray" }}>
               
             <div className='me-auto'>
                {todo.task}
             </div>
             <div>
             <i className={`h5 m-2 ${todo.completed ? "bi bi-check2-square" : "bi bi-square"}`}
             style={ {cursor: "pointer" }} onClick={()=> changeTaskStatus(index) }
             ></i>
             <i className="bi bi-trash text-danger h5"
              style={{cursor:"pointer"}}onClick={()=> deleteTask(index)}
              ></i>
            </div>
            </div>
          )
        } )
       }
     </div>
    </div>
    </>
  )
}

export default App
