import { useMemo } from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { items, removeItem } = useCart();
  const navigate = useNavigate();

  const total = useMemo(() => {
    return items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }, [items]);

  if (items.length === 0) return <p>Cart is empty</p>;

  return (
    <div>
      <h3>Your Cart</h3>

      <ul>
  {items.map(item => (
    <li key={item.id} className="cart-row">
      <div>
        <strong>{item.title}</strong>
        <span>Qty: {item.quantity}</span>
      </div>

      <div>
        ₹{item.price * item.quantity}
        <button onClick={() => removeItem(item.id)}>
          Remove
        </button>
      </div>
    </li>
  ))}
</ul>
      <button onClick={() => navigate("/app/checkout")}>
  Proceed to Checkout
</button>

      <h4 className="cart-total">
  Total: ₹{total}
</h4>
    </div>
  );
}
