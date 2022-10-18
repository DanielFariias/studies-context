import { useContext, useState } from "react"
import { TodoContext } from "../context/TodoContext"

export function Form() {
  const [toDo, setToDo] = useState('')

  const { saveNewTodo } = useContext(TodoContext)

  function HandleSave(e) {
    e.preventDefault()
    saveNewTodo(toDo)
    setToDo('')
  }

  return (
    <form>
      <label htmlFor="">
        <input type="text" value={toDo} onChange={(e) => setToDo(e.target.value)} />
      </label>

      <button type="submit" onClick={HandleSave}>Salvar</button>
    </form>
  )
}