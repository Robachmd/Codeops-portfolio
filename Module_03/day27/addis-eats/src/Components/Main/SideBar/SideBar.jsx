import DeliveryForm from "./DeliveryForm";

import "./SideBar.css";

function SideBar({ total }) {
  return (
    <aside className="sidebar">
      <h2>Your Order</h2>

      <div className="sidebar-total">
        <span>Order Total</span>
        <strong>{total} ETB</strong>
      </div>

      <DeliveryForm total={total} />
    </aside>
  );
}


export default SideBar;