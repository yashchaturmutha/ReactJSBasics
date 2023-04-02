// import React, { useState } from "react";
import React from "react";

// function Display(props)
// {
//     const [isDone,setisDone]=useState(false);

//     function handleClick()
//     {
//         setisDone((prevValue)=>{
//             return !prevValue;
//         })
//     }
//     // props=read only , cant be modified
//     return(
//         <div onClick={handleClick}>
//         <li style={isDone ? { textDecoration: "line-through" } : null}>{props.text}</li>    
//         </div>
//     );
// }
function Display(props)
{
    return(
        <div onClick={()=>{
            props.onchecked(props.id)
        }}
        >
        <li >{props.text}</li>    
        </div>
    );
}

export default Display;