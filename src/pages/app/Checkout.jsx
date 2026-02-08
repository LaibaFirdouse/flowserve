import { useState } from "react";

export default function Checkout() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
const [email, setEmail] = useState("");

  return (
    <div>
      <h2>Checkout</h2>
      <p className="step-indicator">
      Step {step} of 4
    </p>

      {step === 1 && (
        <>
          <h3>Review</h3>
          <p>Review your cart items</p>
          <button onClick={() => setStep(2)}>Continue</button>
        </>
      )}

      {step === 2 && (
        <>
          <h3>Details</h3>
          <input
  placeholder="Full Name"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>

<input
  placeholder="Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

<button
  disabled={!name || !email}
  onClick={() => setStep(3)}
>
  Continue
</button>
        </>
      )}

      {step === 3 && (
        <>
          <h3>Confirm</h3>
          <button onClick={() => setStep(4)}>Place Order</button>
        </>
      )}

      {step === 4 && (
        <>
          <h3>Success 🎉</h3>
          <p>Your order has been placed.</p>
        </>
      )}
    </div>
  );
}
