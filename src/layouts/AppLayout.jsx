import { Outlet } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function AppLayout() {
  const { items } = useCart();

  return (
    <div className="app-shell">
      <header className="app-header">
        <h2>ServiceHub</h2>

        <nav>
          <span>Services</span>
          <span>Orders</span>
        </nav>

        <div className="cart-badge">
          Cart ({items.length})
        </div>
      </header>

      <main className="app-content">
        <Outlet />
      </main>
    </div>
  );
}
