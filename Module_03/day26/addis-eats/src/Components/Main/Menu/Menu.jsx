import Dish from "./Dish/Dish";
import dishes from "../../../data/dishes";

function Menu() {
  return (
    <section className="menu">
      <h1>Our Menu</h1>

      <div className="dish-grid">
        {dishes.map((dish) => (
          <Dish
            key={dish.id}
            name={dish.name}
            price={dish.price}
            image={dish.image}
          />
        ))}
      </div>
    </section>
  );
}

export default Menu;