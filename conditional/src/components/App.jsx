import React from "react";
import Login from './Login';

var isloggedin=false;

function App() {
  return (
    <div className="container">
      {isloggedin?<h1>Hello</h1>:<Login/>}
    </div>
  );
}

export default App;
