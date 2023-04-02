import React from 'react'
import Todos from './Todos';
import { useState } from 'react';
import AddToDo from './AddToDo';

const Home = () => {

    const[todos,setTodos]=useState([
        {
          id:1,
          title :'Market',
          desc : "Go to market"
        },
        {
          id:2,
          title :'Market2',
          desc : "Go to market2"
        },
        {
          id:3,
          title :'Market3',
          desc : "Go to market3"
        }
      ]);
    
      let vars=9;
    
      const onDelete=(todo)=>{
        console.log(todo);
        setTodos(todos.filter(item => item.id !== todo.id));
      }
    
      const onAdd=(addtodo)=>{
        let {title,desc}=addtodo;
        let id=todos.length+1;
    
        const myTodo={
          id:id,
          title:title,
          desc:desc
        }
        console.log(myTodo);
        setTodos([...todos,myTodo]);
      }

  return (
    <div>
        {/* <div>{1+9}</div>
        <div>{vars}</div> */}

       <AddToDo onAdd={onAdd}/>
       <Todos todos={todos} onDelete={onDelete}/>

      
    </div>
  )
}

export default Home