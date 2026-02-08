import { Routes, Route } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import AppLayout from "../layouts/AppLayout";
import ProviderLayout from "../layouts/ProviderLayout";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import Services from "../pages/app/Services";
import Cart from "../pages/app/Cart";
import Orders from "../pages/app/Orders";

import PricingEngine from "../pages/provider/PricingEngine";

import RequireAuth from "../guards/RequireAuth";
import RequireRole from "../guards/RequireRole";
import Checkout from "../pages/app/Checkout";

export default function AppRouter() {
  return (
    <Routes>

      {/* ---------- AUTH ---------- */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* ---------- USER APP ---------- */}
      {/* <Route
        path="/app"
        element={
          <RequireAuth>
            <AppLayout />
          </RequireAuth>
        }
      >
        <Route path="services" element={<Services />} />
        <Route
  path="cart"
  element={
    <RequireRole allowedRoles={["user", "provider"]}>
      <Cart />
    </RequireRole>
  }
/>
        <Route path="orders" element={<Orders />} />
        <Route path="checkout" element={<Checkout />} />
      </Route> */}
      <Route
  path="/app"
  element={
    <RequireAuth>
      <AppLayout />
    </RequireAuth>
  }
>
  <Route path="services" element={<Services />} />
  <Route path="cart" element={<Cart />} />
  <Route path="checkout" element={<Checkout />} />
  <Route path="orders" element={<Orders />} />
</Route>

      

      {/* ---------- PROVIDER ---------- */}
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
