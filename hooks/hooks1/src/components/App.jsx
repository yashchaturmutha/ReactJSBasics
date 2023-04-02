import React, { useState } from "react";

function App() {

    const [count,setcount]=useState(0);

        console.log(count);

        function increment()
        {
            setcount(count+1);
        }
        function decrement()
        {
            setcount(count-1);
        }

    return(
      <div className="container">
        <h1>{count}</h1>
        {/* count isnt var , its state */}
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>);
}

export default App;
