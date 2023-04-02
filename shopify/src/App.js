import Navbar from './component/Navbar';
import Products from './component/Products';
import { Routes, Route } from "react-router-dom";
import ProductInfo from './component/ProductInfo';
import Cart from './component/Cart'

function App() {
  return (
    <div className="App">
     <Navbar/>
     
     <Routes>
        <Route path="/" element={ <Products/> } />
        <Route path="/cart" element={ <Cart/> } />
        <Route path="/:id" element={ <ProductInfo/> } />
      </Routes>

    </div>
  );
}

export default App;
