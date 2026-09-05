import { useMemo, useState } from "react";
import PropTypes from "prop-types";

import useFetch from "../../../Hooks/UseFetch";

import CategoryFilter from "./CategoryFilter";
import Dish from "./Dish/Dish";

import "./Menu.css";

function Menu({ search }) {
  const [category, setCategory] = useState("All");

  const {
    data: dishes,
    loading,
    error,
  } = useFetch("/menu.json");

  const show = useMemo(() => {
    if (!dishes) {
      return [];
    }

    return dishes.filter((dish) => {

      const matchesCategory = category === "All" || dish.category === category;

      const matchesSearch = dish.name.toLowerCase().includes(search.toLowerCase());

      return (
        matchesCategory && matchesSearch );});

  }, [dishes, category, search]);

  if (loading) {
    return (
      <section className="menu">
        <h1>Our Menu</h1>

        <p className="menu-message">
          Loading menu...
        </p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="menu">
        <h1>Our Menu</h1>

        <p className="menu-message error">
          Error: {error}
        </p>
      </section>
    );
  }

  return (
    <section className="menu">

      <h1>Our Menu</h1>

      <CategoryFilter
        category={category}
        setCategory={setCategory}
      />

      {show.length === 0 ? (
        <div className="empty-menu">
          <p>
            No dishes found.
          </p>
        </div>
      ) : (
        <div className="dish-grid">

          {show.map((dish) => (
            <Dish
              key={dish.id}
              dish={dish}
            />
          ))}

        </div>
      )}

    </section>
  );
}

Menu.propTypes = {
  search: PropTypes.string.isRequired,
};

export default Menu;