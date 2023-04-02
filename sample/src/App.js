import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

function App() {

  return (
    <div className="App">
       <Navbar />

       <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
