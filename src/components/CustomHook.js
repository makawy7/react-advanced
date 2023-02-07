import { useEffect, useState } from "react";
import { useFetch } from "./useFetch";

const url = "https://api.github.com/users";

function CustomHook() {
  const { loading, products } = useFetch(url);
  return (
    <>
      <h2>Products</h2>
      {loading ? <h4>Loading</h4> : <ProductsList products={products} />}
    </>
  );
}

function ProductsList({ products }) {
  return (
    <>
      {products.map((product) => (
        <div key={product.id} className="item">
          <p>{product.login}</p>
        </div>
      ))}
    </>
  );
}
export default CustomHook;
