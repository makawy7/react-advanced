import { useState, memo, useMemo, useCallback, useEffect } from "react";
import { useFetch } from "./useFetch";

const url = "https://course-api.com/javascript-store-products";

// any state change triggers a re-render
// I think: useEffect(()=>{}, []) only ignores re-render when the state changes, doesn't mean a re-render not happening
// memo keeps the component from re-rendering unless it's props or an inner state changes

function MemoAndCallback() {
  const { products } = useFetch(url);
  const [counter, setCounter] = useState(0);
  const [cart, setCart] = useState(0);

  // with each re-render addToCart() is re-created, which is passed as a prop to other components
  // that would make then also re-render even with the use if memo, because memo watch for prop changes.
  // useCallback will make addToCart function only gets re-created only when the cart value is changed and not any other state.
  // if we don't pass any value in the dependency array [] the addToCart function is never re-created and the state value will not update.
  const addToCart = useCallback(() => {
    setCart(cart + 1);
  }, [cart]);

  useEffect(() => {
    console.count("MemoAndCallback render!");
  });
  return (
    <>
      <h2>Count: {counter}</h2>
      <button className="btn" onClick={() => setCounter(counter + 1)}>
        Click me
      </button>
      <h2 style={{ marginTop: "3rem" }}>cart: {cart}</h2>
      <List products={products} addToCart={addToCart} />
    </>
  );
}

const List = memo(({ products, addToCart }) => {
  useEffect(() => {
    console.count("List initial!");
  });
  return (
    <section className="products">
      {products.map((product) => (
        <Product key={product.id} {...product} addToCart={addToCart} />
      ))}
    </section>
  );
});

function Product({ fields, addToCart }) {
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
      <button onClick={addToCart}>add to cart</button>
    </article>
  );
}
export default MemoAndCallback;
