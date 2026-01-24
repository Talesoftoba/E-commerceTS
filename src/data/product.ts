import type { Product } from "../types/product";

import headphones from "../assets/images/headphones.jpg";
import smartwatch from "../assets/images/smartwatch.jpg";
import jacket from "../assets/images/jacket.jpg";
import book from "../assets/images/book.jpg";
import sneakers from "../assets/images/sneakers.jpg";

export const productsData:Product[]=[
  {
      id: 1,
      title: "Wireless Headphones",
      description: "High-quality wireless headphones with noise cancellation",
      price: 120,
      category: "electronics",
      image: headphones
  },
    {
      id: 2,
      title: "SmartWatch",
      description: "Stylish smartwatch with fitnss tracking and notifications",
      price: 200,
      category: "electronics",
      image: smartwatch
      
  },
    {
      id: 3,
      title: "Leather Jacket",
      description: "Premium leather jacket for a stylish look",
      price: 350,
      category: "fashion",
      image: jacket
  },
    {
      id: 4,
      title: "Novel Book",
      description: "Bestselling novel to enjoy in your free time",
      price: 25,
      category: "books",
      image: book
  },
    {
      id: 5,
      title: "Sneakers",
      description: "Comfortable sneakers for everyday wear",
      price: 120,
      category: "fashion",
      image: sneakers
  },



];