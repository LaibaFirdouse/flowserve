import React from 'react';


export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = React.useState('Professional');
  const professionalStyle = "pricing-card" + (selectedPlan === 'Professional' ? " featured" : "");
  const starterStyle = "pricing-card" + (selectedPlan === 'Starter' ? " featured" : "");
  const entirepriseStyle = "pricing-card" + (selectedPlan === 'Enterprise' ? " featured" : "");
  return (
    <div className="pricing-page">
      <h1>Simple, transparent pricing</h1>
      <p>Choose a plan that fits your needs</p>

      <div className="pricing-grid">
        <div className={starterStyle} onClick={() => { setSelectedPlan('Starter') }}>
          <h3>Starter</h3>
          <p className="price">Free</p>
          <ul>
            <li>Browse services</li>
            <li>View pricing</li>
            <li>Limited support</li>
          </ul>
          <button className={selectedPlan === 'Starter' ? "primary" : "secondary"}>Get started</button>
        </div>

        <div className={professionalStyle} onClick={() => { setSelectedPlan('Professional') }}>
          <h3>Professional</h3>
          <p className="price">₹999 / month</p>
          <ul>
            <li>Add to cart</li>
            <li>Order tracking</li>
            <li>Email support</li>
          </ul>
          <button className={selectedPlan === 'Professional' ? "primary" : "secondary"}>Start free trial</button>
        </div>

        <div className={entirepriseStyle} onClick={() => { setSelectedPlan('Enterprise') }}>
          <h3>Enterprise</h3>
          <p className="price">Custom</p>
          <ul>
            <li>Custom workflows</li>
            <li>Dedicated support</li>
            <li>Provider access</li>
          </ul>
          <button className={selectedPlan === 'Enterprise' ? "primary" : "secondary"}>Contact sales</button>
        </div>
      </div>
    </div>
  );
}
