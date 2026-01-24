export type Category = "electronics" | "fashion" | "books";

export type Product = {
    id:number;
    title:string;
    description:string;
    price:number;
    category:Category;
    image:string;
}