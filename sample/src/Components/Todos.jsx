import React from 'react'
import TodoItem from './TodoItem'

const Todos = ({todos,onDelete}) => {
  return (
    <div  className='container' style={{minHeight:'70vh',margin:'10px auto'}}>
        <h3 className="text-center">Todos List</h3>

        {todos.length ==0? "No Todos To Display":
        
        todos.map((todo)=>{
            return (<>
            <TodoItem todo={todo} onDelete={onDelete}/>
            <hr />
            </>)
        })
        }
        
    </div>
  )
}

export default Todos