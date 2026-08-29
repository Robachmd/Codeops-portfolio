import PropTypes from "prop-types";
import "./CategoryFilter.css";
const categories = ["All","Vegetarian","Main","Breakfast", "Side",];

function CategoryFilter({ category, setCategory }) {
  return (
    <div className="category-filter">
      <h2 className="category-filter-title">
        Categories
      </h2>

      <div className="category-filter-buttons">
        {categories.map((item) => (
          <button key={item} onClick={() => setCategory(item)}  className={category === item? "category-filter-button active" : "category-filter-button"}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

CategoryFilter.propTypes = {
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
};

export default CategoryFilter;