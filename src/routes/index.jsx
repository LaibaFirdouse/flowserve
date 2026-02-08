import { Routes, Route } from "react-router-dom";

/* ---------- LAYOUTS ---------- */
import PublicLayout from "../layouts/PublicLayout";
import AuthLayout from "../layouts/AuthLayout";
import AppLayout from "../layouts/AppLayout";
import ProviderLayout from "../layouts/ProviderLayout";

/* ---------- PUBLIC PAGES ---------- */
import PublicLanding from "../pages/PublicLanding";
import Services from "../pages/app/Services";
import Pricing from "../pages/Pricing";
import Providers from "../pages/provider/Providers";

/* ---------- AUTH PAGES ---------- */
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

/* ---------- USER APP ---------- */
import Dashboard from "../pages/app/Dashboard";
import Cart from "../pages/app/Cart";
import Checkout from "../pages/app/Checkout";
import Orders from "../pages/app/Orders";

/* ---------- PROVIDER APP ---------- */
import PricingEngine from "../pages/provider/PricingEngine";

/* ---------- GUARDS ---------- */
import RequireAuth from "../guards/RequireAuth";
import RequireRole from "../guards/RequireRole";

export default function AppRouter() {
  return (
    <Routes>

      {/* ===================================================== */}
      {/* PUBLIC MARKETING (NO AUTH) */}
      {/* ===================================================== */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<PublicLanding />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/providers" element={<Providers />} />
      </Route>

      {/* ===================================================== */}
      {/* AUTH (PUBLIC) */}
      {/* ===================================================== */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* ===================================================== */}
      {/* USER APPLICATION (AUTH REQUIRED) */}
      {/* ===================================================== */}
      <Route
        path="/app"
        element={
          <RequireAuth>
            <AppLayout />
          </RequireAuth>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="services" element={<Services />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="orders" element={<Orders />} />
      </Route>

      {/* ===================================================== */}
      {/* PROVIDER APPLICATION (AUTH + ROLE) */}
      {/* ===================================================== */}
      <Route
        path="/provider"
        element={
          <RequireAuth>
            <RequireRole allowedRoles={["provider"]}>
              <ProviderLayout />
            </RequireRole>
          </RequireAuth>
        }
      >
        <Route path="pricing-engine" element={<PricingEngine />} />
      </Route>

    </Routes>
  );
}
