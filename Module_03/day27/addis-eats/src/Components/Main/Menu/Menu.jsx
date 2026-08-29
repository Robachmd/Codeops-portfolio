import { useState } from "react";
import Dish from "./Dish/Dish";
import CategoryFilter from "./categoryFilter";
import dishes from "../../../data/dishes";
import "./Menu.css";

function Menu({ onAdd }) {
  const [category, setCategory] = useState("All");

  const show = category === "All" ? dishes: dishes.filter((dish) => dish.category === category);

  return (
    <section className="menu">
      <h1>Our Menu</h1>

      <CategoryFilter category={category} setCategory={setCategory} />

      {show.length === 0 ? (
        <div className="empty-menu">
          <p>No dishes available.</p>
        </div>
      ) : (
        <div className="dish-grid">
          {show.map((dish) => (
            <Dish
              key={dish.id}
              name={dish.name}
              price={dish.price}
              image={dish.image}
              spicy={dish.spicy}
              category={dish.category}
              onAdd={onAdd}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Menu;