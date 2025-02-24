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
    <div >
    <div className='container m-4 p-4'>
     <div className='m-auto border border-dark rounded border-5 w-50 bg-dark '>
        <button className='btn btn-primary border-dark rounded border-3' onClick={() => alert('Login clicked')} id='butt'>Login</button>
      <button className='btn btn-primary border-dark rounded border-3' onClick={() => alert('Signup clicked')} id='butt'>Signup</button>
       <h2 className='text-white text-center m-5 fw-bolder display-1'> Your Daily Goals!</h2>
       <form className="d-flex" onSubmit={handlesubmit}>
        <input className='form-control m-3 bg-light border-dark rounded border-3 ' placeholder="New Task" name='task'/ >
        <button type="submit" className="btn btn-dark m-3" id='add'>
        <i class="bi bi-plus-square"></i>
        </button>
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
    </div>
    </>
  )
}

export default App