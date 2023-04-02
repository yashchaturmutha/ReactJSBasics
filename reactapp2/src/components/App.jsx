import React from 'react';
import Heading from './heading';
import List from './list';

// import * as all from './export1'
import pi,{doublepi,triplepi,count,Octapi} from './export1';

function App() {
  return  <div>
  <Heading/>
  <List/>
  <List/>
  <Octapi/>
  <h2>{pi}</h2>
  {/* <h2>{all.pi}</h2> */}
  <h2>{doublepi()+count}</h2>
  {/* <h2>{all.doublepi()+all.count}</h2> */}
  <h2>{triplepi()}</h2>
  </div>
}

export default App;

// Keep in mind that there is no JavaScript engine yet that natively supports ES6 modules. 
// You said yourself that you are using Babel. Babel converts import and export declaration 
// to CommonJS (require/module.exports) by default anyway. So even if you use ES6 module 
// syntax, you will be using CommonJS under the hood if you run the code in Node.