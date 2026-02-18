import { useAuth } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Minimum 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = () => {
    setServerError("");

    if (!validate()) return;

    setLoading(true);

    setTimeout(() => {
      if (email === "user@test.com" && password === "123456") {
        login({
          id: 1,
          email,
          role: "user"
        });
        navigate("/app");
      } else {
        setServerError("Invalid email or password");
      }

      setLoading(false);
    }, 1000);
  };

  const handleGoogleLogin = () => {
    window.location.href = "https://accounts.google.com/";
  };

  const handleGithubLogin = () => {
    window.location.href = "https://github.com/login";
  };

  return (
    <div className="login-wrapper">

      {/* LEFT SIDE */}
      <div className="login-brand">
        <h1>Welcome back to FlowServe</h1>
        <p>
          Manage services, track orders, and scale your workflow —
          all from one intelligent dashboard.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="login-card">
        <h2>Sign in</h2>

        <input
          type="text"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="error-text">{errors.email}</p>}

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p className="error-text">{errors.password}</p>}

        {serverError && (
          <div className="server-error">{serverError}</div>
        )}

        <button
          className="primary-btn"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>

        <div className="login-links">
          <Link to="/forgot-password">Forgot password?</Link>
          <Link to="/register">Create account</Link>
        </div>

          
        

        <div className="divider">OR</div>

        <button className="social-btn" onClick={handleGoogleLogin}>
          Continue with Google
        </button>

        <button className="social-btn" onClick={handleGithubLogin}>
          Continue with GitHub
        </button>
      </div>
    </div>
  );
}
