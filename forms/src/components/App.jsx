import React, { useState } from "react";


function App() {

    const [name,setname]=useState("");
    const [name2,setname2]=useState(name);

    function display(event)
    {
        console.log(event.target.value);
        // console.log(event.target.placeholder);
        setname(event.target.value);
    }
    
    function buttonclick(event)
    {
        console.log("Submitted");
        setname2(name);
        event.preventDefault();

    }

  return (
    <div className="container">
      <h1>{name2} </h1>

      <form action="" onSubmit={buttonclick}>
      <input value={name} onChange={display} type="text" placeholder="What's your name?" />
      <button type="submit" >Submit</button>{/* onClick */}
      </form>
    </div>
  );
}

export default App;
