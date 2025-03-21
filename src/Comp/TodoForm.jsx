import React, { useState } from 'react'
import { useTodo } from '../Context/TodoContext'

const TodoForm = () => {
    const [todomsg, setTodomsg] = useState("")  //this will be uploaded in the object title we are storing out input here
    const {addTodo } = useTodo()
    const add = (e) =>{
       e.preventDefault()
       if(!todomsg) return
      addTodo({id : Date.now(), todoTitle : todomsg, completed : false }) //passing an object here nnow to add thre task
      //now after adding empty the ip field agaion
      setTodomsg("")
    }

    return (
      <form
        onSubmit={add}
        action=""
        style={{
          display: "flex",
          gap: "10px",
          background: "rgba(255, 255, 255, 0.9)",
          padding: "15px",
          borderRadius: "12px",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
          transition: "all 0.3s ease",
          maxWidth: "100%",
          fontFamily: "'Poppins', sans-serif",
          backdropFilter: "blur(5px)",
        }}
      >
        <input
          type="text"
          placeholder='Write a task to add'
          value={todomsg}
          onChange={(e) => setTodomsg(e.target.value)}
          style={{
            flex: 1,
            padding: "12px",
            border: "1px solid rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            fontSize: "1rem",
            background: "white",
            color: "#333",
            outline: "none",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.05)",
            transition: "border 0.3s ease, box-shadow 0.3s ease",
          }}
          onFocus={(e) => {
            e.target.style.border = "2px solid #42a5f5";
            e.target.style.boxShadow = "0 2px 10px rgba(66, 165, 245, 0.2)";
          }}
          onBlur={(e) => {
            e.target.style.border = "1px solid rgba(0, 0, 0, 0.1)";
            e.target.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.05)";
          }}
        />
        <button
          type='submit'
          style={{
            padding: "12px 20px",
            background: "#4caf50",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "1rem",
            cursor: "pointer",
            transition: "background 0.3s ease, transform 0.2s ease",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
          }}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          onFocus={(e) => (e.target.style.background = "#388e3c")}
          onBlur={(e) => (e.target.style.background = "#4caf50")}
        >
          Submit
        </button>
      </form>
    )
}

export default TodoForm