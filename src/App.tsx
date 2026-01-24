
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { CartDrawer } from "./components/cart/CartDrawer";
import { CartProvider } from "./context/CartContext";
import { Home } from "./pages/Home"; 
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Container } from "./components/layout/Container";
import { Checkout } from "./pages/Checkout";
import { ProductDetails } from "./pages/ProductDetails";


function App() {
  const [isCartOpen, setisCartOpen] = useState(false);
 

  return (
    <CartProvider>
      <Router>
        <Header openCart={()=>setisCartOpen(prev=>!prev)}/>

      <CartDrawer isOpen={isCartOpen} onClose={()=>
       setisCartOpen(false)}/>
       <Container>
      <Routes>
       
    <Route path="/" element={<Home/>}/>
    <Route path="/product/:id" element={<ProductDetails/>}/>
    <Route path="/checkout" element={<Checkout/>}/>


</Routes>
</Container>
      <Footer/>
     </Router>
    </CartProvider>
    
  );
}

export default App


