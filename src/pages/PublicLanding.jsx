import { useNavigate } from "react-router-dom";

export default function PublicLanding() {
  const navigate = useNavigate();

  return (
    <div className="landing">

      {/* HERO */}
      <section id="services-section" className="hero">
        <h1>
          Discover services.<br />
          <span>Work smarter.</span>
        </h1>

        <p>
          FlowServe helps teams find, purchase, and manage professional services
          with clarity, speed, and confidence.
        </p>

        <div className="hero-actions">
          <button id="prim1" className="primary" onClick={() => navigate("/services")}>
            Browse Services
          </button>
          <button className="secondary" onClick={() => navigate("/login")}>
            Login
          </button>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="services-preview">
        <div className="service-card" onClick={() => navigate("/services")}>
          <h3>Design Services</h3>
          <p>UX audits, UI design, branding</p>
        </div>

        <div className="service-card" onClick={() => navigate("/services")}>
          <h3>Development</h3>
          <p>Frontend, backend, performance</p>
        </div>

        <div className="service-card" onClick={() => navigate("/services")}>
          <h3>Consulting</h3>
          <p>Product, architecture, scaling</p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="how-it-works">
        <h2>How FlowServe works</h2>

        <div className="flow-step left">
          <h3>1. Discover services</h3>
          <p>
            Browse curated professional services with transparent pricing
            and clear scope.
          </p>
        </div>

        <div className="flow-step right">
          <h3>2. Purchase securely</h3>
          <p>
            Add services to cart and checkout securely when you’re ready.
          </p>
        </div>

        <div className="flow-step left">
          <h3>3. Track & manage</h3>
          <p>
            Manage orders, history, and future purchases from one place.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Start using FlowServe today</h2>
        <button className="primary" onClick={() => navigate("/services")}>
          Explore Services
        </button>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div>
          <h4>FlowServe</h4>
          <span>About</span>
          <span>Careers</span>
          <span>Contact</span>
        </div>

        <div>
          <h4>Product</h4>
          <span>Services</span>
          <span>Pricing</span>
          <span>Providers</span>
        </div>

        <div>
          <h4>Resources</h4>
          <span>Blog</span>
          <span>Docs</span>
          <span>Support</span>
        </div>
      </footer>

    </div>
  );
}
