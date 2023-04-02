import React from 'react';
import ReactDOM from 'react-dom';

const fruits=['banana','apple','orange'];
const name=['bye',...fruits,'hi','ohh'];

console.log(name);

const fullname={
fname:'yash',
lname:'chatur'
}

const adhaar={
    ...fullname,
    id:23,
    city:'nasik'
}

console.log(adhaar);
// ReactDOM.render(<App />,document.getElementById('root'));
