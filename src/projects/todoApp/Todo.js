import React from "react"

const Todo = (props) => {
  let isEditing = props.todo.isEditing
  return (
    <div className="bg-gray-200 w-full border h-10 text-center border-solid border-slate-600 flex justify-between items-center">
      {isEditing ? (
        <input
          className="ml-2"
          value={props.editText}
          onChange={(e) => props.setEditText(e.target.value)}
        />
      ) : (
        <h1 className="ml-2">{props.todo.text}</h1>
      )}

      <div id="btn-container" className=" flex gap-2 mr-2">
        {isEditing ? (
          <button
            className="bg-green-500 rounded-full px-2"
            onClick={() => props.onEditSubmit(props.todo.id)}
          >
            Change
          </button>
        ) : (
          <button
            className="bg-green-500 rounded-full px-2"
            onClick={() => props.onEditClick(props.todo.id)}
          >
            Edit
          </button>
        )}

        <button
          className="bg-red-500 rounded-full px-2"
          onClick={() => props.onDeleteClick(props.todo.id)}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default Todo
