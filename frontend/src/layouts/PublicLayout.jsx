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
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


export default function PublicLayout() {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  const goToSection = (sectionId) => {
    navigate(`/#${sectionId}`);
  };

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);



  //   return (
  //     <>
  //       <header className="public-header">
  //         <div className="brand" onClick={() => navigate("/")}>
  //           FlowServe
  //         </div>

  //         <nav className="public-nav">

  //           <span onClick={() => {
  //             document.getElementById("services-section")?.scrollIntoView({ behavior: "smooth" });
  //           }}>
  //             Services
  //           </span>
  //           <span onClick={() => {
  //             document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
  //           }}>
  //             How it works
  //           </span>
  //           <span onClick={() => navigate("/pricing")}>Pricing</span>
  //           <span onClick={() => navigate("/providers")}>Providers</span>
  //         </nav>

  //         <button className="secondary" onClick={() => navigate("/login")}>
  //           Login
  //         </button>
  //       </header>

  //       <Outlet />
  //     </>
  //   );
  // }

  return (
    <>
      <header className="public-header">

        <div
          className="brand"
          onClick={() =>
            isAuthenticated ? navigate("/app") : navigate("/")
          }
        >
          FlowServe
        </div>

        <nav className="public-nav">

          <span onClick={() => goToSection("services-section")}>
            Services
          </span>

          <span onClick={() => goToSection("how-it-works")}>
            How it works
          </span>

          <span onClick={() => navigate("/pricing")}>
            Pricing
          </span>

          <span onClick={() => navigate("/providers")}>
            Providers
          </span>

        </nav>

        {!isAuthenticated ? (
          <button
            className="secondary"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        ) : (
          <button
            className="secondary"
            onClick={() => {
              logout();
              navigate("/");
            }}
          >
            Logout
          </button>
        )}

      </header>

      <Outlet />
    </>
  );
}