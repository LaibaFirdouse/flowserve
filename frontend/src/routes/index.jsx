import { Routes, Route } from "react-router-dom";

/* ---------- LAYOUTS ---------- */
import PublicLayout from "../layouts/PublicLayout";
import AuthLayout from "../layouts/AuthLayout";
import AppLayout from "../layouts/AppLayout";
import ProviderLayout from "../layouts/ProviderLayout";

/* ---------- PAGES ---------- */
import PublicLanding from "../pages/PublicLanding";
import Services from "../pages/app/Services";
import Pricing from "../pages/Pricing";
import Providers from "../pages/provider/Providers";
import Testimonials from "../pages/Testimonials";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";


import Cart from "../pages/app/Cart";
import Checkout from "../pages/app/Checkout";
import Orders from "../pages/app/Orders";

import PricingEngine from "../pages/provider/PricingEngine";

/* ---------- GUARDS ---------- */
import RequireAuth from "../guards/RequireAuth";
import RequireRole from "../guards/RequireRole";

export default function AppRouter() {
  return (
    <Routes>

      {/* GLOBAL LAYOUT*/}
      <Route element={<PublicLayout />}>

        {/* PUBLIC */}
        <Route path="/" element={<PublicLanding />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/providers" element={<Providers />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/services" element={<Services />} />

        <Route
          path="/cart"
          element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          }
        />

        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />

        <Route
          path="/orders"
          element={
            <RequireAuth>
              <Orders />
            </RequireAuth>
          }
        />

        {/* AUTH */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />


        </Route>

        {/* PROVIDER */}
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

      </Route>

    </Routes>
  );
}