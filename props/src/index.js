import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App'

// function Card(props)
// {
//     return (
//     <div   className="mee">
//         <h2>{props.name}</h2>
//         <img src={props.img} alt="" srcset="" />
//         <p>{props.tel}</p>
//         <p>{props.email}</p>
//     </div>);
// }

// function App()
// {
// return <div>
//     <h1>Contacts</h1>

//     <Card name="Yash" img="https://www.spec-india.com/wp-content/uploads/2020/01/Top-Companies-Using-ReactJS.png" tel="8999954141" email="ymc@gmail.com"/>
// </div>
// }
// ReactDOM.render(<div>
//   <h1>Contacts</h1>

//   <Card 
//   name="Yash" 
//   img="https://www.spec-india.com/wp-content/uploads/2020/01/Top-Companies-Using-ReactJS.png"
//    tel="8999954141" 
//    email="ymc@gmail.com"/>
//   <Card 
//   name="Chyeshwant" 
//   img="https://www.spec-india.com/wp-content/uploads/2020/01/Top-Companies-Using-ReactJS.png"
//    tel="23456" 
//    email="11@gmail.com"/>
// </div>
// ,document.getElementById('root'));

ReactDOM.render(<App />, document.getElementById("root"));