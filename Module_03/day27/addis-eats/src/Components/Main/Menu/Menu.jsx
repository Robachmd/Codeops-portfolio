import Dish from "./Dish/Dish";
import dishes from "../../../data/dishes";

function Menu({category}) {
  const show =dishes.filter((dish) => dish.category === category);
  if (show.length === 0) {
    return (
      <section className="empty-menu">
        <h1>Our Menu</h1>
        <p>No dishes available.</p>
      </section>
    );
  }

  return (
    <section className="menu">
      <h1>Our Menu</h1>

      <div className="dish-grid">
        { show.map((dish) => (
          <Dish
            key={dish.id}
            name={dish.name}
            price={dish.price}
            image={dish.image}
            spicy={dish.spicy}
            category={dish.category}
          />
        ))}
      </div>
    </section>
  );
}

export default Menu;