import { useEffect, useState } from 'react'
import './App.css'

type Todo = {
  id : number,
  text: string 
}


const todosArray:Todo[] = [
  {id: 1, text: "Do smth" },
  {id: 2, text: "Do smth else" },
  {id: 3, text: "Do smth else entirely" },
  {id: 4, text: "Do nothing" },
]

function App() {
  const [todos, setTodos] = useState<Todo[]>(todosArray)


  function addTodo(todoText:string){
    const newTodo : Todo = {
      id: todos.length + 1,
      text: todoText
    }
    const newTodos = [...todos,newTodo]
    setTodos(newTodos)
    return newTodos

  }
  function deleteTodo(todoToDelete:Todo){
    const newTodos = todos.filter(todo => todo.id !== todoToDelete.id )
   
    setTodos(newTodos)
    return newTodos
  }

  
  return (
    <div className="App">
        <h1>Todos</h1>
      <form onSubmit={(e)=>{
        e.preventDefault()
        // @ts-ignore
        addTodo(e.target.todo.value)
      }}>
        <label htmlFor="todo">
          <input type="text" name="todo" id="todo" />
        </label>
        <button type="submit">Add Todo</button>
      </form>
      <ul>
      {
        todos?.map(todo=>{
          return (
            <li key={todo.id}>
                {todo.text}
                <span 
                    className='deleteTodo'
                    onClick={()=>deleteTodo(todo)}
                    >X</span>
            </li>          
          )  
      })
      }
      </ul>
    </div>
  )
}

export default App
