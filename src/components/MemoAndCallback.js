import { useState, memo, useMemo, useCallback, useEffect } from "react";
import { useFetch } from "./useFetch";

const url = "https://course-api.com/javascript-store-products";

// any state change triggers a re-render
// I think: useEffect(()=>{}, []) only ignores re-render when the state changes, doesn't mean a re-render not happening
// memo keeps the component from re-rendering unless it's props or an inner state changes

function MemoAndCallback() {
  const { products } = useFetch(url);
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.count("MemoAndCallback render!");
  });
  return (
    <>
      <h2>Count: {counter}</h2>
      <button className="btn" onClick={() => setCounter(counter + 1)}>
        Click me
      </button>
      <List products={products} />
    </>
  );
}

const List = memo(({ products }) => {
  useEffect(() => {
    console.count("List initial!");
  });
  return (
    <section className="products">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </section>
  );
});

function Product({ fields }) {
  useEffect(() => {
    console.count("Product initial!");
  });
  let { name, price } = fields;
  price = price / 100;
  const image = fields.image[0].url;
  return (
    <article className="product">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <button>add to cart</button>
    </article>
  );
}
export default MemoAndCallback;
