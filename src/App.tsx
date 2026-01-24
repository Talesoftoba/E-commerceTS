
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { CartDrawer } from "./components/cart/CartDrawer";
import { CartProvider } from "./context/CartContext";
import { Home } from "./pages/Home"; 
import { Container } from "./components/layout/Container";
import { Checkout } from "./pages/Checkout";
import { ProductDetails } from "./pages/ProductDetails";
import { Layout } from "./components/layout/Layout";


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


