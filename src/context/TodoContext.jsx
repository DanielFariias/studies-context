import { createContext, useState } from "react";


export const TodoContext = createContext({})


export function TodoProvider({children}) {
  const [toDoList, setToDoList] = useState([])

  function saveNewTodo(todo) {
    setToDoList(prevState => ([...prevState, todo]))
  }


  return (
    <TodoContext.Provider value={{ toDoList, saveNewTodo }}>
      {children}
    </TodoContext.Provider>
  )
}