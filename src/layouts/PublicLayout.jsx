// import { Outlet } from "react-router-dom";
// import { useCart } from "../context/CartContext";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// export default function PublicLayout() {
//   const { items } = useCart();
//   const { user } = useAuth();
//   const navigate = useNavigate();

//   return (
//     <>
//       <header className="public-header">
//   <div className="brand" onClick={() => navigate("/")}>
//     FlowServe
//   </div>

//   <nav className="public-nav">
//     <span onClick={() => navigate("/services")}>Services</span>
//     <span>How it Works</span>
//     <span>Pricing</span>
//     <span>Providers</span>
//   </nav>

//   <div className="auth-actions">
//     <button className="secondary" onClick={() => navigate("/login")}>
//       Login
//     </button>
//   </div>
// </header>


//       <main className="app-content">
//         <Outlet />
//       </main>
//     </>
//   );
// }
import { Outlet, useNavigate } from "react-router-dom";

export default function PublicLayout() {
  const navigate = useNavigate();

  return (
    <>
      <header className="public-header">
        <div className="brand" onClick={() => navigate("/")}>
          FlowServe
        </div>

        <nav className="public-nav">
          {/* <span onClick={() => navigate("/services")}>Services</span> */}
          <span onClick={() => {
            document.getElementById("services-section")?.scrollIntoView({ behavior: "smooth" });
          }}>
            Services
          </span>
          <span onClick={() => {
            document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
          }}>
            How it works
          </span>
          <span>Pricing</span>
          <span>Providers</span>
        </nav>

        <button className="secondary" onClick={() => navigate("/login")}>
          Login
        </button>
      </header>

      <Outlet />
    </>
  );
}

