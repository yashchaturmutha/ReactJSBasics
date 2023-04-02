import React from 'react';
import ReactDOM from 'react-dom';
import animals,{useanimal} from './data';
import './index.css';

const [cat,dog]=animals;//destructuring array 
// const cat=animals[0];
console.log(cat);

const{name:n,sound:s,feeding:{food,water}}=cat;
console.log(s);
console.log(food);

const{name="fluffy",sound="purr"}=cat;
console.log(name);

console.log(useanimal(dog));

const[animalname,animalsound]=useanimal(dog);
console.log(animalname);



// ReactDOM.render(
//     <App />
//   ,document.getElementById('root')
// );
