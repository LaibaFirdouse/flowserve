// import { Outlet, Link, useNavigate } from "react-router-dom";
// import { FiShoppingCart } from "react-icons/fi";
// import { useCart } from "../context/CartContext";
// import { useAuth } from "../context/AuthContext";

// export default function AppLayout() {
//   const { items = [] } = useCart();
//   const { logout } = useAuth();
//   const navigate = useNavigate();

//   const totalItems = items.reduce(
//     (sum, item) => sum + (item.quantity || 1),
//     0
//   );

//   console.log("Cart in header:", items);

//   return (
//     <div>
//       <header className="app-header">

//         {/* LOGO → goes to landing (your dashboard) */}
//         <div className="logo" onClick={() => navigate("/")}>
//           FlowServe
//         </div>

//         {/* 🔥 NAVIGATION ADDED */}
//         <nav className="app-nav">
//           <span onClick={() => navigate("/")}>Home</span>

//           <span onClick={() => navigate("/services")}>
//             Services
//           </span>

//           <span onClick={() => navigate("/orders")}>
//             Orders
//           </span>
//         </nav>

//         {/* RIGHT SIDE */}
//         <div className="app-actions">

//           {/* CART (existing logic untouched) */}
//           <div
//             className="cart-container"
//             onClick={() => navigate("/cart")}
//           >
//             <FiShoppingCart className="cart-icon" />
//             {totalItems > 0 && (
//               <span className="cart-badge">{totalItems}</span>
//             )}
//           </div>

//           {/* 🔥 LOGOUT ADDED */}
//           <button
//             className="secondary"
//             onClick={() => {
//               logout();
//               navigate("/");
//             }}
//           >
//             Logout
//           </button>

//         </div>
//       </header>

//       <main>
//         <Outlet />
//       </main>
//     </div>
//   );
// }
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <main>
      <Outlet />
    </main>
  );
}