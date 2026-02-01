
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { CartDrawer } from "./components/cart/CartDrawer";
import { CartProvider } from "./context/CartContext";
import { Home } from "./pages/Home"; 
import { Container } from "./components/layout/Container";
import { Checkout } from "./pages/Checkout";
import { ProductDetails } from "./pages/ProductDetails";
import { Layout } from "./components/layout/Layout";
import { Payment } from "./pages/Payment";
import { Confirmation } from "./pages/Confirmation";


function AppContent() {
  const [isCartOpen, setisCartOpen] = useState(false);
  const location = useLocation();
 
  useEffect(()=>{
    if(location.pathname === "/checkout"){
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setisCartOpen(false);
    }
  },[location.pathname]);

  useEffect(()=>{
    document.body.style.overflow = isCartOpen ? "hidden" : "auto";

    return()=>{
      document.body.style.overflow = "auto";
    };
  },[isCartOpen]);

  return (
    <>
      
       {isCartOpen &&(
      <CartDrawer isOpen={isCartOpen} onClose={()=>
       setisCartOpen(false)}/>
      )}
      <Layout openCart={()=>setisCartOpen(true)}>
       <Container>
      <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/product/:id" element={<ProductDetails/>}/>
    <Route path="/checkout" element={<Checkout/>}/>
    <Route path="/payment" element={<Payment/>}/>
    <Route path="/confirmation" element={<Confirmation/>}/>
</Routes>
</Container>
      </Layout>
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


