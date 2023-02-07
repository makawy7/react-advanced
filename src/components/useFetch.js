import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const getProducts = async () => {
    const response = await fetch(url);
    console.log(response.status);
    const myProducts = await response.json();
    setProducts(myProducts);
    setLoading(false);
  };
  useEffect(() => {
    getProducts();
  }, [url]);
  return { loading, products };
};
