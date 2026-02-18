import { useForm } from "react-hook-form";
import { useState } from "react";

export default function ForgotPassword() {
  const { register, handleSubmit } = useForm();
  const [message, setMessage] = useState("");

  const onSubmit = (data) => {
    setMessage("Password reset link sent to " + data.email);
  };

  return (
    <div className="forgot-wrapper">
      <h2>Reset your password</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email", { required: true })}
        />

        <button type="submit" className="primary-btn">
          Send Reset Link
        </button>
      </form>

      {message && <p style={{ marginTop: "15px" }}>{message}</p>}
    </div>
  );
}
