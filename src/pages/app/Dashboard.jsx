import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      {/* HERO */}
      <section className="dashboard-hero">
        <h1>
          Manage services.<br />Checkout faster.
        </h1>
        <p>
          Discover professional services, manage orders, and track everything
          in one simple workspace.
        </p>

        <div className="hero-actions">
          <button
            className="primary"
            onClick={() => navigate("/app/services")}
          >
            Browse Services
          </button>
          <button
            className="secondary"
            onClick={() => navigate("/app/cart")}
          >
            View Cart
          </button>
        </div>
      </section>

      {/* PRIMARY ACTIONS */}
      <section className="dashboard-actions">
        <div
          className="action-card"
          onClick={() => navigate("/app/services")}
        >
          <h3>Explore Services</h3>
          <p>Browse curated professional services tailored for you.</p>
        </div>

        <div
          className="action-card"
          onClick={() => navigate("/app/orders")}
        >
          <h3>Track Orders</h3>
          <p>View your past purchases and order status.</p>
        </div>

        <div
          className="action-card"
          onClick={() => navigate("/app/cart")}
        >
          <h3>Your Cart</h3>
          <p>Review selected services before checkout.</p>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="dashboard-values">
        <div>
          <h4>Curated Services</h4>
          <p>High-quality offerings selected for real business needs.</p>
        </div>
        <div>
          <h4>Transparent Pricing</h4>
          <p>No hidden fees. Know exactly what you’re paying for.</p>
        </div>
        <div>
          <h4>Secure Checkout</h4>
          <p>Your data and payments are handled safely.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="dashboard-cta">
        <h2>Ready to get started?</h2>
        <button
          className="primary"
          onClick={() => navigate("/app/services")}
        >
          Explore Services
        </button>
      </section>
    </div>
  );
}
