import axios from "axios";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
}

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const getProducts = async () => {
          setLoading(true);
      try {
        const response = await axios.get("http://127.0.0.1:5000/products");
        if (response.status === 200) {
          setProducts(response.data.products);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    let timeout: number;
    timeout = setTimeout(() => {
      getProducts();
    },5000);

    return () => clearTimeout(timeout);
  }, []);

  return { products, loading };
};
