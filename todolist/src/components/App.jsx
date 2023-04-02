import React, { useState } from "react";
import Display  from "./listitem";
import InputArea from "./InputArea";

function App() {

    const[items,setitems]=useState([]);

      function deleteitem(id)
      {
        setitems(previtem => {
          return(
            previtem.filter((founditem,index)=>{
              return(
                index!==id
              )
            })
          )
        });
      }

      function additem(inputtext) {
    
        setitems(previtem => {
          return[
              ...previtem,inputtext
          ]
        });
      }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea addfunc={additem}/>
      <div>
        <ul>
            {
               items.map((founditem,index)=> <Display key={index}id={index}onchecked={deleteitem} text={founditem}/> )       
            }
        </ul>
      </div>
    </div>
  );
}

export default App;
