import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
const fname="yash";
const lname="chatur";
const num=8;

// const head={
//   color:'red',
//   textAlign:'center'
// }
//head.color="yellow";

//what to show, where to show
ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <div>
    <h1 className="heading">
    {/* <h1 style={head}> */}
    
    {/* <h1 
    style={{color:'red'}}style attr req value that is js obj
    > */}
    
    Hello World {fname+" "+lname}</h1>
    <h1>Hello World {3+4}</h1>
    <h1>Hello {new Date().getFullYear()}</h1>

    {/* interpreted this part as string using es6 template literals and */}
    {/*we have got these strings inserted in as javascipt in these curly braces from jsx */}
    {/* string into our h1 and js code in js file */}
    {/* <h1>Hello World {`${fname} ${lname}`}</h1> */}
    <p>Oyeee {num}</p>
    <ul>
      <li>a</li>
      <li>b</li>
      <li>c</li>
    </ul>

    <section className="images">
      <img alt="random"src="https://cdn1.edgedatg.com/aws/v2/abc/ModernFamily/showimages/e06cb0991ee33445654b96d29aa0d02b/1200x627-Q80_e06cb0991ee33445654b96d29aa0d02b.jpg"></img>
      <img alt="random"src="https://i.pinimg.com/originals/5f/c1/0d/5fc10d66872310b8c1549cb85ccb2edd.jpg"></img>
      <img alt="random"src="https://www.denofgeek.com/wp-content/uploads/2018/11/the_last_kingdom_3-1_0.jpg?fit=1200%2C675"></img>
    </section>
  </div>
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();

//-----------------Challenge - 1--------------- 
// import React from 'react';
// import ReactDOM  from 'react-dom';


// const date=new Date();

// var hours = date.getHours();
// var greet="";

// const heading={
// color:""
// }

// if(hours<12)
// {
//     greet="Morning";
//     heading.color="red";

// }
// else if(hours>=18)
// {
// greet="Night";
// heading.color="blue";
// }

// else
// {
// greet="Afternoon";
// heading.color="green";
// }

// ReactDOM.render(<h1 style={heading}>Good {greet}!</h1>,document.getElementById('root'));