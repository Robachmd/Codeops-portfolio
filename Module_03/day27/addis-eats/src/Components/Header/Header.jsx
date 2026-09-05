import { useRef } from "react";
import PropTypes from "prop-types";

import { useCart } from "../../Context/CartContext";

import "./Header.css";

function Header({ search, setSearch }) {
  const searchRef = useRef(null);
  const { itemCount } = useCart();
  function handleSearch(event) {
    setSearch(event.target.value);
  }

  function focusSearch() {
    searchRef.current.focus();
  }

  return (
    <header className="header">
      <div className="header-content">

        <div className="logo">
          <h1>Addis Eats</h1>
          <p>Delicious Ethiopian Food</p>
        </div>

        <div className="header-actions">
          <input ref={searchRef} type="text" placeholder="Search dishes..." value={search} onChange={handleSearch}
          />

          <button onClick={focusSearch}>
            Search
          </button>

          <div className="cart-badge">
            {itemCount}
          </div>

        </div>

      </div>
    </header>
  );
}

Header.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};

export default Header;