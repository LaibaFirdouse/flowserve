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
      
      <section className="core-actions">

  <div className="action-card">
    <h3>Explore Services</h3>
    <p>
      Discover curated professional services tailored to your business.
    </p>
    <button onClick={() => navigate("/app/services")}>Browse Services</button>
  </div>

  <div className="action-card">
    <h3>Track Orders</h3>
    <p>
      Monitor purchases, delivery status, and order history in one place.
    </p>
    <button>View Orders</button>
  </div>

  <div className="action-card">
    <h3>Your Cart</h3>
    <p>
      Review selected services and proceed to secure checkout.
    </p>
    <button onClick={() => navigate("/app/cart")}>Go to Cart</button>
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
