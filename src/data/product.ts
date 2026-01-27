import type { Product } from "../types/product";

import headphones1 from "../assets/images/headphones1.png";
import smartwatch1 from "../assets/images/smartwatch1.png";
import jacket1 from "../assets/images/jacket1.png";
import book1 from "../assets/images/book1.png";
import sneakers1 from "../assets/images/sneakers1.png";
import bag2 from "../assets/images/bag2.png"
import dress1 from "../assets/images/dress1.png"
import shirt1 from "../assets/images/shirt1.png"



export const productsData:Product[]=[
  {
      id: 1,
      title: "Wireless Headphones",
      description: "High-quality wireless headphones with noise cancellation",
      price: 120,
      category: "electronics",
      image: headphones1
  },
    {
      id: 2,
      title: "SmartWatch",
      description: "Stylish smartwatch with fitnss tracking and notifications",
      price: 200,
      category: "electronics",
      image: smartwatch1
      
  },
    {
      id: 3,
      title: "Leather Jacket",
      description: "Premium leather jacket for a stylish look",
      price: 350,
      category: "fashion",
      image: jacket1
  },
    {
      id: 4,
      title: "Novel Book",
      description: "Bestselling novel to enjoy in your free time",
      price: 25,
      category: "books",
      image: book1
  },
    {
      id: 5,
      title: "Sneakers",
      description: "Comfortable sneakers for everyday wear",
      price: 120,
      category: "fashion",
      image: sneakers1
  },
  {
    id: 6,
    title: "Leather Bag",
    description: "Classic comfortable and trendy",
    price: 150,
    category: "fashion",
    image: bag2
  },
  {
    id: 7,
    title: "Dress",
    description: "best quality and trendy fashion",
    price: 150,
    category: "fashion",
    image: dress1
  },
  {
    id: 8,
    title: "T-shirt",
    description: "Best quality shirts",
    price: 200,
    category: "fashion",
    image: shirt1
  }

];