import React, { useState } from "react";

function App() {

  const[heading,setheading]=useState("Click");
  
  const[mouseover,setmouseover]=useState(false);

  function onmouseover()
  {
    setmouseover(true);
  }
  function onmouseout()
  {
    setmouseover(false);
  }
  function clicked()
{
  setheading("Submitted");
}
  return (
    <div className="container">
      <h1>{heading}</h1>
      <input type="text" placeholder="What's your name?" />
      
      <button style={{backgroundColor: mouseover ?"black":"white"}}
             onClick={clicked}
             onMouseOut={onmouseout}
             onMouseOver={onmouseover}>Submit</button>
             
    </div>
  );
}

export default App;
