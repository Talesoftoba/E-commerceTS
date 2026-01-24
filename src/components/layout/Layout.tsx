
import { Footer } from "./Footer";
import type { ReactNode } from "react";
import { Header } from "./Header";


type Props ={
    children:ReactNode;
    openCart:()=>void;
}

export const Layout =({children,openCart}:Props)=>{
    return(
        <div className="flex flex-col min-h-screen">
          <Header openCart={openCart}/>
            <main className="grow">{children}</main>
         <Footer/>
        </div>

    );

};