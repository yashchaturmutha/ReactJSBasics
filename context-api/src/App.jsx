import React,{createContext} from 'react'
import ComC from './ComC'

const FirstName=createContext();
const LastName=createContext();

const App = () => {
  return (
    <div>
      
      <FirstName.Provider value={"Varun"}>
      <LastName.Provider value={"Chaturmutha"}>
      <ComC/> 
      </LastName.Provider>
      </FirstName.Provider>
    </div>
  )
}

export default App;
export {FirstName,LastName};
