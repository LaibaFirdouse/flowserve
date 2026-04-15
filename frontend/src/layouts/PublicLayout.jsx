
// import { Outlet, useNavigate } from "react-router-dom";
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { useCart } from "../context/CartContext";





// export default function PublicLayout() {
//   const navigate = useNavigate();
//   const { isAuthenticated, logout } = useAuth();
//   const { items } = useCart();


//   const goToSection = (sectionId) => {
//     navigate(`/#${sectionId}`);
//   };

//   const location = useLocation();

//   useEffect(() => {
//     if (location.hash) {
//       const id = location.hash.replace("#", "");
//       const element = document.getElementById(id);

//       if (element) {
//         element.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   }, [location]);





//   return (
//     <>
//       <header className="public-header">

//         <div
//           className="brand"

//           onClick={() => navigate("/")}

//         >
//           FlowServe
//         </div>



//         {/* <nav className="public-nav">

//           <span onClick={() => goToSection("services-section")}>
//             Services
//           </span>


//           <span onClick={() => goToSection("how-it-works")}>
//             How it works
//           </span>

//           <span onClick={() => navigate("/pricing")}>
//             Pricing
//           </span>

//           <span onClick={() => navigate("/providers")}>
//             Providers
//           </span>

//           <span onClick={() => navigate("/testimonials")}>
//             Testimonials
//           </span>

//         </nav> */}
//         <nav className="public-nav">

//           <span onClick={() => goToSection("services-section")}>
//             Services
//           </span>

//           <span onClick={() => goToSection("how-it-works")}>
//             How it works
//           </span>

//           <span onClick={() => navigate("/pricing")}>
//             Pricing
//           </span>

//           <span onClick={() => navigate("/providers")}>
//             Providers
//           </span>

//           <span onClick={() => navigate("/testimonials")}>
//             Testimonials
//           </span>

//           {/* 🔥 ONLY WHEN LOGGED IN */}
//           {isAuthenticated && (
//             <>
//               <span onClick={() => navigate("/orders")}>
//                 Orders
//               </span>

//               <span onClick={() => navigate("/cart")}>
//                 Cart ({items.length})
//               </span>
//             </>
//           )}

//         </nav>

//         {!isAuthenticated ? (
//           <button
//             className="secondary"
//             onClick={() => navigate("/login")}
//           >
//             Login
//           </button>
//         ) : (
//           <button
//             className="secondary"
//             onClick={() => {
//               logout();
//               navigate("/");
//             }}
//           >
//             Logout
//           </button>
//         )}

//       </header>

//       <Outlet />
//     </>
//   );
// }
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { FiShoppingCart } from "react-icons/fi";

export default function PublicLayout() {
  const navigate = useNavigate();
  const location = useLocation();


  const { items = [] } = useCart();

  const [loggingOut, setLoggingOut] = useState(false);
  const [open, setOpen] = useState(false);
  const { isAuthenticated, logout, user } = useAuth();

  const totalItems = items.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0
  );

  const goToSection = (sectionId) => {
    navigate(`/#${sectionId}`);
  };

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <header className="public-header">

        {/* LOGO */}
        <div
          className="brand"
          onClick={() => navigate("/")}
        >
          FlowServe
        </div>

        {/* NAV */}
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

          <span onClick={() => navigate("/testimonials")}>
            Testimonials
          </span>

          {/* 🔥 AUTH NAV */}
          {isAuthenticated && (
            <>


              <span onClick={() => navigate("/orders")}>
                Orders
              </span>
            </>
          )}
        </nav>


        <div className="nav-actions">

          {isAuthenticated && (
            <div className="cart-container" onClick={() => navigate("/cart")}>
              <FiShoppingCart />
              <span className="cart-badge">{items.length}</span>
            </div>
          )}


          {/* AUTH BUTTON */}
          {!isAuthenticated ? (
            <button
              className="secondary"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          ) : (
            <div className="profile-wrapper">
              <div
                className="profile-trigger"
                onClick={() => setOpen(!open)}
              >
                👤
              </div>

              {open && (
                <div className="profile-dropdown">
                  <p className="profile-email">{user?.email}</p>

                  <button
                    onClick={() => {
                      setLoggingOut(true);

                      setTimeout(() => {
                        logout();
                        setLoggingOut(false);
                        setOpen(false);
                        navigate("/");
                      }, 800);
                    }}
                  >
                    {loggingOut ? "Logging out..." : "Logout"}
                  </button>
                </div>
              )}
            </div>
          )}

        </div>

      </header>

      <Outlet />
    </>
  );
}