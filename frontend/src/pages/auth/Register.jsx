import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Register() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user"
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};

    // NAME VALIDATION
    if (!form.name.trim()) {
      newErrors.name = "Full name is required";
    } else if (form.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    } else if (form.name.length > 50) {
      newErrors.name = "Name is too long";
    } else if (!/^[a-zA-Z\s]+$/.test(form.name)) {
      newErrors.name = "Name can only contain letters";
    }

    // EMAIL VALIDATION
    if (!form.email) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

      if (!emailRegex.test(form.email.trim())) {
        newErrors.email = "Enter a valid email address";
      }

      if (form.email.length > 254) {
        newErrors.email = "Email is too long";
      }
    }

    // PASSWORD VALIDATION
    if (!form.password) {
      newErrors.password = "Password is required";
    } else {
      if (form.password.length < 8) {
        newErrors.password = "Password must be at least 8 characters";
      } else if (form.password.length > 128) {
        newErrors.password = "Password is too long";
      } else if (!/[A-Z]/.test(form.password)) {
        newErrors.password = "Must contain at least one uppercase letter";
      } else if (!/[a-z]/.test(form.password)) {
        newErrors.password = "Must contain at least one lowercase letter";
      } else if (!/[0-9]/.test(form.password)) {
        newErrors.password = "Must contain at least one number";
      } else if (!/[!@#$%^&*]/.test(form.password)) {
        newErrors.password =
          "Must contain at least one special character (!@#$%^&*)";
      }
    }

    // CONFIRM PASSWORD
    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Please confirm password";
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value
    });
  };

  const handleRegister = () => {
    if (!validate()) return;

    setLoading(true);

    setTimeout(() => {
      // Fake user creation
      login({
        id: Date.now(),
        email: form.email,
        role: form.role
      });

      navigate("/services");
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="login-wrapper">

      {/* LEFT SIDE */}
      <div className="login-brand">
        <h1>Create your FlowServe account</h1>
        <p>
          Discover, purchase, and manage professional services —
          all in one streamlined workspace.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="login-card">
        <h2>Create Account</h2>

        <input
          type="text"
          name="name"
          placeholder="Full name"
          value={form.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error-text">{errors.name}</p>}

        <input
          type="text"
          name="email"
          placeholder="Email address"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error-text">{errors.email}</p>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error-text">{errors.password}</p>}

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          value={form.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && (
          <p className="error-text">{errors.confirmPassword}</p>
        )}

        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          className="role-select"
        >
          <option value="user">User</option>
          <option value="provider">Provider</option>
        </select>

        <button
          className="primary-btn"
          onClick={handleRegister}
          disabled={loading}
        >
          {loading ? "Creating account..." : "Create Account"}
        </button>

        <div className="login-links">
          <span>Already have an account?</span>
          <Link to="/login">Sign in</Link>
        </div>
      </div>
    </div>
  );
}
