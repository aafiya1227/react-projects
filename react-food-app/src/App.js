import  {useState}  from "react";
import Header from "./Components/Layouts/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";
function App() {
const [CartIsShown,SetCartIsShown]=useState(false)
const showCartHandler=()=>{
  SetCartIsShown(true)
}
const hideCartHandler=()=>{
  SetCartIsShown(false)
}
  return (
    <CartProvider>
   {CartIsShown &&   <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
     
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
