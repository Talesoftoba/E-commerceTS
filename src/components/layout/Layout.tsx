
import { Footer } from "./Footer";
import type { ReactNode } from "react";


type Props ={
    children:ReactNode;
}

export const Layout =({children}:Props)=>{
    return(
        <div className="">
          
            <main>{children}</main>
         <Footer/>
        </div>

    );

};