import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { items, addItem, decrementItem, removeItem } = useCart();
  const navigate = useNavigate();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <div className="cart-container">

        {/* LEFT SIDE */}
        <div className="cart-items">
          <h2>Your Cart</h2>

          {items.length === 0 ? (
            <p className="muted">Your cart is empty</p>
          ) : (
            items.map(item => (
              <div key={item.id} className="cart-card">
                <div className="cart-info">
                  <h4>{item.title}</h4>
                  <p className="price">₹{item.price}</p>
                </div>

                <div className="cart-actions">
                  {/* <div className="qty-controls">
                    <button
                      onClick={() =>
                        item.quantity > 1
                          ? removeItem(item.id)
                          : removeItem(item.id)
                      }
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button onClick={() => addItem(item)}>
                      +
                    </button>
                  </div> */}
                  <div className="qty-controls">
  <button onClick={() => decrementItem(item.id)}>
    −
  </button>

  <span>{item.quantity}</span>

  <button onClick={() => addItem(item)}>
    +
  </button>
</div>

                  <button
                    className="remove-btn"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* RIGHT SIDE */}
        <div className="cart-summary">
          <h3>Order Summary</h3>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{total}</span>
          </div>

          <div className="summary-row total">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <button className="checkout-btn" onClick={() => navigate("/app/checkout")} >
            Proceed to Checkout
          </button>
        </div>

      </div>
    </div>
  );
}
