import { Outlet, Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function AppLayout() {
  const { items = [] } = useCart();
const navigate = useNavigate();

const totalItems = items.reduce(
  (sum, item) => sum + (item.quantity || 1),
  0
);
console.log("Cart in header:", items);

  return (
    <div>

      <header className="app-header">
        <Link to="/app" className="logo">
          FlowServe
        </Link>

        <div className="cart-container" onClick={() => navigate("/app/cart")}>
  <FiShoppingCart className="cart-icon" />
  {totalItems > 0 && (
    <span className="cart-badge">{totalItems}</span>
  )}

</div>
      </header>

      <main>
        <Outlet />
      </main>

    </div>
  );
}
