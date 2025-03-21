import { useEffect, useState } from "react"
import { TodoProvider } from "./Context/TodoContext"
import TodoForm from "./Comp/TodoForm"
import TodoList from "./Comp/TodoList"

function App() {
  const [todosArr, setTodoArr] = useState([])

  const addTodo = (todoObj) => {
    setTodoArr(prevArr => [todoObj, ...prevArr])
  }

  const updateTodo = (id, todoObj) => {
    setTodoArr(prevArr => prevArr.map((eachObj) => (eachObj.id === id ? todoObj : eachObj) ) )
  } 

  const deleteTodo = (id) => {
    setTodoArr(prevArr => prevArr.filter((eachObj) => (eachObj.id != id  )))
  }

  const toggleComplete =(id) => {
    setTodoArr(prevArr => prevArr.map((eachObj) => eachObj.id === id?  {...eachObj, completed : !eachObj.completed} : eachObj  ) )
  }

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todosArr"))
    if (savedTodos && savedTodos.length > 0){
      setTodoArr(savedTodos)
    }
  }, [])

  useEffect( () => {
    localStorage.setItem("todosArr", JSON.stringify(todosArr)) 
  }, [todosArr] )

  return (
    <div
      className="min-h-screen w-screen bg-gradient-to-br from-[#1e3c72] to-[#2a5298] flex justify-center items-center p-5 font-poppins box-border fixed top-0 left-0 overflow-y-auto"
    >
      <TodoProvider value={{todosArr, addTodo, updateTodo, deleteTodo, toggleComplete}}>
        <div
          className="w-full max-w-[600px] bg-white/95 rounded-2xl p-6 shadow-2xl backdrop-blur-md flex flex-col gap-5 min-h-[300px]"
        >
          <h1
            className="text-3xl font-semibold text-center text-[#1e3c72] m-0"
          >
            Todo App
          </h1>
          <TodoForm />
          <div
            className="flex flex-col gap-4"
          >
            {todosArr.map((eachObj) => (
              <TodoList key={eachObj.id} todoObj={eachObj} />
            ))}
          </div>
        </div>
      </TodoProvider>
    </div>
  )
}

export default App