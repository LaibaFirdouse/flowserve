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
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".profile-wrapper")) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

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

          {/* AUTH NAV */}
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

                  <div className="profile-info">
                    <span className="profile-email">{user?.email}</span>
                  </div>

                  <hr className="dropdown-divider" />

                  <button
                    className="logout-btn"
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