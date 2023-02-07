import { useFetch } from "./useFetch";
import PropTypes from "prop-types";
import noImage from "../assets/noimage.png";

const url = "https://course-api.com/react-prop-types-example";

function PropTypesBasics() {
  const { products } = useFetch(url);
  return (
    <>
      <h2>Products</h2>
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </>
  );
}

function Product({ name, image, price }) {
  return (
    <article className="product">
      <img src={image.url} alt={name} />
      <h4>{name}</h4>
      <h4>${price}</h4>
    </article>
  );
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired,
};

Product.defaultProps = {
  name: "No name",
  image: { url: noImage },
  price: 3.99,
};

export default PropTypesBasics;
