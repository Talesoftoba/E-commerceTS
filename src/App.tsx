
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { CartDrawer } from "./components/cart/CartDrawer";
import { CartProvider } from "./context/CartContext";
import { Home } from "./pages/Home"; 
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Container } from "./components/layout/Container";
import { Checkout } from "./pages/Checkout";
import { ProductDetails } from "./pages/ProductDetails";


function AppContent() {
  const [isCartOpen, setisCartOpen] = useState(false);
  const location = useLocation();
 
  useEffect(()=>{
    if(location.pathname === "/checkout"){
      setisCartOpen(false);
    }
  },[location.pathname]);

  return (
    <>
        <Header openCart={()=>setisCartOpen(true)}
          />
       {isCartOpen &&(
      <CartDrawer isOpen={isCartOpen} onClose={()=>
       setisCartOpen(false)}/>
      )}
       <Container>
      <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/product/:id" element={<ProductDetails/>}/>
    <Route path="/checkout" element={<Checkout/>}/>
</Routes>
</Container>
      <Footer/>
     </>
  );
}


export default function App(){
  return(
    <CartProvider>
      <Router>
        <AppContent/>
      </Router>
    </CartProvider>
  )
}


