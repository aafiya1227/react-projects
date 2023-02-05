import './App.css'
import { Routes,Route } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Home from './Components/Home';
import Products from './Components/Products';
import Product from './Components/Product'
import Cart from './Components/Cart';
function App() {
  return(
    <>
    
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/products' element={<Products/>}/>
      <Route exact path='/products/:id' element={<Product/>}/>
      <Route exact path='/cart' element={<Cart/>}/>

    </Routes>
    
    </>
  )
}

export default App;
