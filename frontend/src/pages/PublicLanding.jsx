import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";



export default function PublicLanding() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div className="landing">



      <section id="services-section" className="hero">


        <div className="main-glass">

          <h1>
            Discover services.<br />
            <span>Work smarter.</span>
          </h1>

          <p>
            FlowServe helps teams find, purchase, and manage professional services
            with clarity, speed, and confidence.
          </p>

          <div className="hero-actions">
            <button
              id="prim1"
              className="primary"
              onClick={() => navigate("/services")}
            >
              Browse Services
            </button>

            <button
              id="sec1"
              className="secondary"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>

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
        <h2 style={{ fontFamily: "sans-serif" }}>Start using FlowServe today</h2>
        <button className="tertiary" onClick={() => navigate("/services")}>
          Explore Services
        </button>
      </section>



      <footer className="footer">

        <div className="footer-container">

          <div className="footer-column">
            <h3>FlowServe</h3>
            <p>
              A smarter platform to discover, compare, and manage professional services.
            </p>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Product</h4>
            <ul>
              <li>Services</li>
              <li>Pricing</li>
              <li>Providers</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Resources</h4>
            <ul>
              <li>Blog</li>
              <li>Docs</li>
              <li>Support</li>
            </ul>
          </div>

        </div>




      </footer>
      <div className="footer-bottom">
        © 2026 FlowServe. All rights reserved.
      </div>


    </div>



  );
}
