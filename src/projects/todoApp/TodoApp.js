import React, { useState } from "react"
import Todo from "./Todo"

const TodoApp = () => {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState("")
  const [editText, setEditText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.length == 0) {
      return null
    }
    const newTodo = {
      id: todos.length + 1,
      text: input,
      isEditing: false,
    }
    setTodos((prevTodo) => [...prevTodo, newTodo])
    setInput("")
  }

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const onEditClick = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: true } : todo
      )
    )
  }

  const onEditSubmit = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: editText, isEditing: false } : todo
      )
    )
    setEditText("")
  }

  const onDeleteClick = (id) => {
    const newArr = todos.filter((todo, i) => {
      return todo.id != id
    })
    setTodos(newArr)
  }

  const todosElement = todos.map((todo, i) => {
    return (
      <Todo
        key={i}
        id={i}
        todo={todo}
        onDeleteClick={onDeleteClick}
        onEditClick={onEditClick}
        onEditSubmit={onEditSubmit}
        editText={editText}
        setEditText={setEditText}
      />
    )
  })

  return (
    <div
      id="container"
      className="bg-cyan-300 w-screen h-screen flex justify-center items-center"
    >
      <div id="card" className="bg-yellow-200 w-1/2 flex items-center flex-col">
        <h1 className="font-bold text-xl mb-4">Enter Your Todo</h1>
        <form onSubmit={handleSubmit} className="mb-3 h-10">
          <input
            className="bg-gray-50 h-full"
            type="text"
            value={input}
            onChange={handleChange}
          />
          <button className="ml-2 rounded-full px-2 bg-green-500">
            Submit
          </button>
        </form>
        {todosElement}
      </div>
    </div>
  )
}

export default TodoApp
