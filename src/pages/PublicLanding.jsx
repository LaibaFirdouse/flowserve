import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";



export default function PublicLanding() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(null);

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

      <section className="content-grid">
  <Card
    tag="FEATURED"
    title="A smarter way to buy services"
    desc="Compare providers, pricing, and delivery timelines in one place."
    onClick={() => scrollTo("services")}
  />

  <Card
    tag="GUIDE"
    title="How FlowServe works"
    desc="From discovery to checkout in minutes."
    onClick={() => scrollTo("how-it-works")}
  />

  <Card
    tag="PROVIDER"
    title="Work with verified experts"
    desc="Only vetted professionals with real delivery history."
    onClick={() => navigate("/providers")}
  />

  <Card
    tag="PRICING"
    title="Transparent pricing, no surprises"
    desc="See costs upfront before you commit."
    onClick={() => navigate("/pricing")}
  />
</section>




<section id="how-it-works" className="story-section">
  <div className="story-content">

    <div className="story-left">
      <h2 className="story-heading">
        Built for modern teams.
        <br />
        Designed for speed.
      </h2>

      <p className="story-paragraph">
        FlowServe removes the friction from buying professional services.
        No scattered vendors. No unclear pricing. No messy coordination.
      </p>

      <p className="story-paragraph">
        Discover curated services with transparent scope. Compare options
        confidently. Purchase securely. Track and manage everything
        in one powerful dashboard.
      </p>

      <p className="story-highlight">
        Clarity. Control. Confidence.
      </p>
    </div>

    <div className="story-right">
      <div className="visual-card">
        <div className="visual-badge">AI Powered</div>
        <h3>Smart Service Matching</h3>
        <p>
          Intelligent recommendations based on your business needs,
          past purchases, and performance history.
        </p>
      </div>
    </div>

  </div>

  {/* Floating blobs */}
  <div className="blob blob-1"></div>
  <div className="blob blob-2"></div>
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
