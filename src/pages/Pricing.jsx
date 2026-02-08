export default function Pricing() {
  return (
    <div className="pricing-page">
      <h1>Simple, transparent pricing</h1>
      <p>Choose a plan that fits your needs</p>

      <div className="pricing-grid">
        <div className="pricing-card">
          <h3>Starter</h3>
          <p className="price">Free</p>
          <ul>
            <li>Browse services</li>
            <li>View pricing</li>
            <li>Limited support</li>
          </ul>
          <button className="secondary">Get started</button>
        </div>

        <div className="pricing-card featured">
          <h3>Professional</h3>
          <p className="price">₹999 / month</p>
          <ul>
            <li>Add to cart</li>
            <li>Order tracking</li>
            <li>Email support</li>
          </ul>
          <button className="primary">Start free trial</button>
        </div>

        <div className="pricing-card">
          <h3>Enterprise</h3>
          <p className="price">Custom</p>
          <ul>
            <li>Custom workflows</li>
            <li>Dedicated support</li>
            <li>Provider access</li>
          </ul>
          <button className="secondary">Contact sales</button>
        </div>
      </div>
    </div>
  );
}
