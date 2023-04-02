import React,{useState} from "react";

function InputArea(props)
{
    const[inputtext,setinputtext]=useState("");

    function changeinput(event)
    {
        setinputtext(event.target.value);
        console.log(inputtext);
    }

    

    return(
    <div className="form">
        <input onChange={changeinput} type="text" value={inputtext}></input>
       
        <button onClick={()=>{
            props.addfunc(inputtext)
            setinputtext("")
        }}>
          <span>Add</span>
        </button>
      </div>);
}

export default InputArea;