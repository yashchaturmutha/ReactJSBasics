import React, { useState } from "react";



function App() {

    // const[fname,setfname]=useState("");
    // const[lname,setlname]=useState("");
    const[fullname,setfullname]=useState({
        fname:"",
        lname:""
    });

    function handlechange(event)
    {
        // console.log(event.target.value);
        // console.log(event.target.name);

        const{name,value}=event.target;

        setfullname((prevValue)=>{
            if(name==="fName")
            {
                return{
            fname:value,
            lname:prevValue.lname
            }
        }
            else if(name==="lName")
            {
                return{
            lname:value,
            fname:prevValue.fname
            }
        }
        });
    }
    // function fnamechange(event)
    // {
    //     setfname(event.target.value);
    // }
    // function lnamechange(event)
    // {
    //     setlname(event.target.value);
    // }

  return (
    <div className="container">
      <h1>Hello {fullname.fname} {fullname.lname}</h1>
      <form>
        <input value={fullname.fname}onChange={handlechange} name="fName" placeholder="First Name" />
        <input value={fullname.lname}onChange={handlechange}name="lName" placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
