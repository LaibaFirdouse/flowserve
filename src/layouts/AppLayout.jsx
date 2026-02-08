// import { Outlet } from "react-router-dom";
// import { useCart } from "../context/CartContext";

// export default function AppLayout() {
//   const { items } = useCart();

//   return (
//     <div className="app-shell">
//       <header className="app-header">
//   <h2 className="logo">ServiceHub</h2>

//   <nav className="nav-links">
//     <span>Services</span>
//     <span>Orders</span>
//   </nav>

//   <div className="cart-badge">
//     🛒 {items.length}
//   </div>
// </header>


//       <main className="app-content">
//         <Outlet />
//       </main>
//     </div>
//   );
// }
import { Outlet } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function AppLayout() {
  const { items } = useCart();

  return (
    <>
      <header className="app-header">
        <h2>ServiceHub</h2>
        <div>Cart ({items.length})</div>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}
