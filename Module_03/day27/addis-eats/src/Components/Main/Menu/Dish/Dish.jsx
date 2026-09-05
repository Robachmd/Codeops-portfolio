import { useState } from "react";
import PropTypes from "prop-types";

import { useCart } from "../../../../Context/CartContext";

import "./Dish.css";

function Dish({ dish }) {
  const [count, setCount] = useState(0);
  const { addToCart } = useCart();
  function handleClick() {
    setCount((prevCount) => prevCount + 1);
    addToCart(dish);
  }

  return (
    <div className="dish">
      <img
        src={dish.image}
        alt={dish.name}
      />
      <h3>{dish.name}</h3>
      <div className="dish-info">
        <h4 className="category">
          {dish.category}
        </h4>

        {dish.spicy && (
          <span className="spicy-badge">
            Spicy
          </span>
        )}
      </div>

      <p>
        {dish.price} ETB
      </p>

      <div className="dish-action">
        <button
          onClick={handleClick} className="order-button"
        >
          Add to cart
        </button>

        <span className="count">
          {count}
        </span>
      </div>
    </div>
  );
}

Dish.propTypes = {
  dish: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    spicy: PropTypes.bool,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Dish;