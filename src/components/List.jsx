import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"

export function List() {
 const { toDoList } = useContext(TodoContext)

  return (
    <ul>
      {toDoList.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  )
}