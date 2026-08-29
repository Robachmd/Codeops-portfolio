import './Dish.css';
import {useState} from 'react';
import PropTypes from "prop-types";
const Dish = ({ name, price, image, spicy,category,currency="ETB",onAdd }) => {
    function handleClick() {
        setCount((prevCount) => prevCount + 1);
        onAdd(price);
        console.log(`Added ${name} to cart`);
    }
    const [count, setCount] = useState(0);


    return (
        <div className="dish">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <div className="dish-info">
            <h4 className='category'>{category}</h4>
            {spicy && <span className='spicy-badge'>Spicy</span>}
            </div>
            <p>{price} {currency}</p>
            <button onClick={handleClick} className="order-button">Add to cart </button><span className="count">{count}</span>
            
        </div>
    
)}

Dish.propTypes={
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    spicy: PropTypes.bool,
    category: PropTypes.string.isRequired,
    currency: PropTypes.string
}

export default Dish;