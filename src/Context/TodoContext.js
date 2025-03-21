//create context
//create a provider
//create a hook to export it and use it in other components

import { useContext } from "react";
import { createContext } from "react";

export  const TodoContext = createContext({todosArr:[{
    id:123, todoTitle : "learn", completed: false
}
],
addTodo : (todoObj) =>{} ,
updateTodo : (id, todoObj) =>{}, 
// here inn update toto will pass obj along with its overrided value todo title by s[pread obj hence will have the updte dobject then update it with same older version] 
deleteTodo: (id) => {} ,
//here above will add whole obj array by just using a filter to remove the obj with passed id
toggleComplete : (id) =>{}

})

 export const TodoProvider = TodoContext.Provider

export  const useTodo = () => {
    return useContext(TodoContext)
}