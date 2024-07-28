import React from "react"

const Todo = (props) => {
  return (
    <div className="bg-gray-200 w-full border h-10 text-center border-solid border-slate-600 flex justify-between items-center">
      <h1 className="ml-2">{props.todo}</h1>
      <div id="btn-container" className=" flex gap-2 mr-2">
        <button className="bg-green-500 rounded-full px-2">Edit</button>
        <button
          className="bg-red-500 rounded-full px-2"
          onClick={() => props.onDeleteClick(props.id)}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default Todo
