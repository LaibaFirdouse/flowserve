import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { items, clearCart } = useCart();
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const progressPercent = (step / 4) * 100;

  const handlePlaceOrder = () => {
    clearCart();
    setStep(4);
  };

  if (items.length === 0 && step !== 4) {
    return (
      <div className="checkout-empty">
        <h2>Your cart is empty</h2>
        <button onClick={() => navigate("/services")}>
          Browse Services
        </button>
      </div>
    );
  }

  return (
    <div className="checkout-page">

      {/* LEFT SIDE */}
      <div className="checkout-main">

        <h2>Secure Checkout</h2>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <p className="step-indicator">Step {step} of 4</p>

        {step === 1 && (
          <div className="checkout-section">
            <h3>Review Your Order</h3>

            {items.map(item => (
              <div key={item.id} className="review-item">
                <span>{item.title}</span>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))}

            <button
              className="primary-btn"
              onClick={() => setStep(2)}
            >
              Continue
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="checkout-section">
            <h3>Contact Details</h3>

            <input
              className="checkout-input"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              className="checkout-input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && (
              <p className="error-text">Enter valid email</p>
            )}
            <button
              className="primary-btn"
              disabled={!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)}
              onClick={() => setStep(3)}
            >
              Continue
            </button>


          </div>
        )}

        {step === 3 && (
          <div className="checkout-section">
            <h3>Confirm & Pay</h3>

            <p>
              You’re about to purchase services worth ₹{subtotal}.
            </p>

            <button
              className="primary-btn"
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
          </div>
        )}

        {step === 4 && (
          <div className="checkout-success">
            <h3>🎉 Order Confirmed</h3>
            <p>Thank you {name}, your services are being processed.</p>

            <button
              className="primary-btn"
              onClick={() => navigate("/")}
            >
              Go to Dashboard
            </button>
          </div>
        )}

      </div>

      {/* RIGHT SIDE */}
      <div className="checkout-summary">
        <h3>Order Summary</h3>

        {items.map(item => (
          <div key={item.id} className="summary-item">
            <span>{item.title} × {item.quantity}</span>
            <span>₹{item.price * item.quantity}</span>
          </div>
        ))}

        <div className="summary-total">
          <span>Total</span>
          <span>₹{subtotal}</span>
        </div>
      </div>

    </div>
  );
}
