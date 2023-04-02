import React from "react";

function Input(props)
{
    return(
    <input type={props.text} placeholder={props.placeholder} />);
}

function Login()
{
    return(
    <form className="form">
   <Input type="text" placeholder="Username"/>
   <Input type="password" placeholder="password"/>
    <button type="submit">Login</button>
  </form>);
}

export default Login;