import './Dish.css';
import PropTypes from "prop-types";
const Dish = ({ name, price, image, spicy,category,currency="ETB" }) => {
    
    return (
        <div className="dish">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <div className="dish-info">
            <h4 className='category'>{category}</h4>

            {spicy && <span className='spicy-badge'>Spicy</span>}

            </div>
            <p>{price} {currency}</p>

        </div>
)
}

Dish.propTypes={
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    spicy: PropTypes.bool,
    category: PropTypes.string.isRequired,
    currency: PropTypes.string
}

export default Dish;