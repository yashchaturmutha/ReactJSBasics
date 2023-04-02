import React, { useState } from "react";

function App() {
    setInterval(update,1000);

    const [time,setTime]=useState(new Date().toLocaleTimeString());

    function update()
        {
            setTime(new Date().toLocaleTimeString());
        }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={update}>Get Time</button>
    </div>
  );
}

export default App;
