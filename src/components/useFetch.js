import { useEffect, useState, useCallback } from "react";

export const useFetch = (url) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = useCallback(async () => {
    const response = await fetch(url);
    // console.log(response.status);
    const myProducts = await response.json();
    setProducts(myProducts);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    getProducts();
  }, [url, getProducts]);
  
  return { loading, products };
};
