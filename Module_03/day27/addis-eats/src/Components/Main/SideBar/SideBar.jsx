import DeliveryForm from "./DeliveryForm";

import { useCart } from "../../../Context/CartContext";

import "./SideBar.css";

function SideBar() {
  const {
    items,
    total,
    removeFromCart,
    clearCart,
  } = useCart();

  return (
    <aside className="sidebar">
      <h2>Your Order</h2>

      {items.length === 0 ? (
        <p className="empty-cart">
          Your cart is empty.
        </p>
      ) : (
        <div className="cart-items">
          {items.map((item) => (
            <div
              className="cart-item"
              key={item.id}
            >
              <div className="cart-item-info">
                <strong>
                  {item.name}
                </strong>

                <span>
                  {item.quantity} ×{" "}
                  {item.price} ETB
                </span>
              </div>

              <div className="cart-item-actions">
                <span>
                  {item.price *
                    item.quantity}{" "}
                  ETB
                </span>

                <button
                  onClick={() =>
                    removeFromCart(item.id)
                  }
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <button
            className="clear-cart-button"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </div>
      )}

      <div className="sidebar-total">
        <span>Order Total</span>

        <strong>
          {total} ETB
        </strong>
      </div>

      <DeliveryForm />
    </aside>
  );
}

export default SideBar;