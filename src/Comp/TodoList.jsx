import React, { useState } from 'react'
import { useTodo } from '../Context/TodoContext'

const TodoList = ({todoObj}) => {
    const [isEditable, setIsEditable] = useState(false)
    const [updatedTitle, setUpdatedTitle] = useState(todoObj.todoTitle)
    const {updateTodo, deleteTodo, toggleComplete} = useTodo()
    const completedTogg = () => {
        toggleComplete(todoObj.id)
    }
    const saveChange = () =>{
        if (!updatedTitle.trim()) return;  //this prevents addibng ampty values
        updateTodo( todoObj.id, {...todoObj, todoTitle:updatedTitle})
        setIsEditable(false)
    }
      
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        background: todoObj.completed ? "rgba(200, 230, 201, 0.9)" : "rgba(255, 255, 255, 0.95)",
        padding: "15px",
        borderRadius: "12px",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease",
        marginBottom: "10px",
        border: "1px solid rgba(0, 0, 0, 0.05)",
        maxWidth: "100%",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <input
        type="checkbox"
        checked={todoObj.completed}
        onChange={completedTogg}
        style={{
          width: "20px",
          height: "20px",
          cursor: "pointer",
          accentColor: "#4caf50",
        }}
      />
      <input
        type="text"
        readOnly={!isEditable}
        value={updatedTitle}
        onChange={(e) => setUpdatedTitle(e.target.value)}
        style={{
          flex: 1,
          padding: "10px",
          border: isEditable ? "2px solid #42a5f5" : "1px solid rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          fontSize: "1rem",
          background: isEditable ? "#fff" : "transparent",
          color: todoObj.completed ? "#888" : "#333",
          textDecoration: todoObj.completed ? "line-through" : "none",
          outline: "none",
          transition: "border 0.3s ease, background 0.3s ease",
          boxShadow: isEditable ? "0 2px 8px rgba(66, 165, 245, 0.2)" : "none",
        }}
      />
      <button
        onClick={() => {
          if(todoObj.completed) return
          if(isEditable) saveChange()
          else setIsEditable(true)
        }}
        style={{
          padding: "8px 15px",
          background: isEditable ? "#4caf50" : "#42a5f5",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontSize: "0.9rem",
          cursor: todoObj.completed ? "not-allowed" : "pointer",
          opacity: todoObj.completed ? 0.5 : 1,
          transition: "background 0.3s ease, transform 0.2s ease",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        }}
        onMouseOver={(e) => !todoObj.completed && (e.target.style.transform = "scale(1.05)")}
        onMouseOut={(e) => !todoObj.completed && (e.target.style.transform = "scale(1)")}
        disabled={todoObj.completed}
      >
        {isEditable ? "Save" : "Edit"}
      </button>
      <button
        onClick={() => {deleteTodo(todoObj.id)}}
        style={{
          padding: "8px 15px",
          background: "#ef5350",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontSize: "0.9rem",
          cursor: "pointer",
          transition: "background 0.3s ease, transform 0.2s ease",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        }}
        onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
        onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
      >
        Delete
      </button>
    </div>
  )
}

export default TodoList