import React from 'react'

const TodoItem = ({todo,onDelete}) => {
  return (
    <div className='my-3'>
    <h4>{todo.title}</h4>
    <p>{todo.desc}</p>
    <button type="button" class="btn btn-danger btn-sm my-0" onClick={()=>onDelete(todo)}>Delete</button>
    </div>
  )
}

export default TodoItem