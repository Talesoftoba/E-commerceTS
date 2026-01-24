import type { ReactNode } from "react";


type Props={
    children:ReactNode;
};

export const Container =({children}:Props)=>{
    return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
    </main>
    );
};