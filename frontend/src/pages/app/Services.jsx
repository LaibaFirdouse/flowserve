// import { useState, useMemo,useEffect } from "react";
// import { useServices } from "../../hooks/useServices";
// import { useDebounce } from "../../hooks/useDebounce";
// import { useCart } from "../../context/CartContext";
// import { useAuth } from "../../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// export default function Services() {
//   const [page, setPage] = useState(1);
//   const [search, setSearch] = useState("");
//   const [addedId, setAddedId] = useState(null);
//   const { addItem } = useCart();
//   const { user } = useAuth();
// const navigate = useNavigate();


//   const debouncedSearch = useDebounce(search, 500);

//   const { data, total, loading, error } = useServices({
//     page,
//     limit: 4,
//     search: debouncedSearch
//   });



// // useEffect(() => {
// //   if (addedId) {
// //     const timer = setTimeout(() => setAddedId(null), 1500);
// //     return () => clearTimeout(timer);
// //   }
// // }, [addedId]);


//   useEffect(() => {
//   setPage(1);
// }, [debouncedSearch]);

//   // if (loading) return <p className="muted">Loading services…</p>;
//   if (error) return <p>{error}</p>;
//   if (data.length === 0)
//   return <p className="muted">No services match your search</p>;

//   return (
//   <div className="services-page">
//     <div className="services-container">

//       <div className="services-header">
//         <h1>Available Services</h1>
//         <input
//           type="text"
//           placeholder="Search services..."
//           className="service-search"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>

//       <div className="services-grid">
//         {data.map(service => (
//           <div key={service.id} className="service-card">
//             <div>
//               <div className="service-title">{service.title}</div>
//               <div className="service-price">₹{service.price}</div>
//             </div>

//             <button
//               className="add-btn"
//               onClick={() => {
//                 if (!user) {
//                   navigate("/login");
//                   return;
//                 }
//                 addItem(service);
//               }}
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>

//       <div className="pagination">
//         <button
//           disabled={page === 1}
//           onClick={() => setPage(prev => prev - 1)}
//         >
//           Prev
//         </button>

//         <button
//           disabled={page * 4 >= total}
//           onClick={() => setPage(prev => prev + 1)}
//         >
//           Next
//         </button>
//       </div>

//     </div>
//   </div>
// );
// }
import { useState, useEffect } from "react";
import { useServices } from "../../hooks/useServices";
import { useDebounce } from "../../hooks/useDebounce";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [addedId, setAddedId] = useState(null);

  const { addItem } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const debouncedSearch = useDebounce(search, 500);

  const { data, total, loading, error } = useServices({
    page,
    limit: 4,
    search: debouncedSearch
  });

  useEffect(() => {
    setPage(1);
  }, [debouncedSearch]);

  if (error) return <p>{error}</p>;
  if (!loading && data.length === 0)
    return <p className="muted">No services match your search</p>;

  return (
    <div className="services-page">
      <div className="services-container">

        <div className="services-header">
          <h1>Available Services</h1>
          <input
            type="text"
            placeholder="Search services..."
            className="service-search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="services-grid">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="service-card skeleton">
                <div className="skeleton-title"></div>
                <div className="skeleton-price"></div>
                <div className="skeleton-btn"></div>
              </div>
            ))
            : data.map((service) => (
              <div key={service.id} className="service-card">
                <div>
                  <div className="service-title">{service.title}</div>
                  <div className="service-price">₹{service.price}</div>
                </div>

                <button
                  className={`add-btn ${addedId === service.id ? "added" : ""
                    }`}
                  onClick={() => {
                    if (!user) {
                      navigate("/login");
                      return;
                    }

                    setAddedId(service.id);
                    addItem(service);

                    setTimeout(() => setAddedId(null), 1200);
                  }}
                >
                  {addedId === service.id ? "Added ✓" : "Add to Cart"}
                </button>
              </div>
            ))}
        </div>

        <div className="pagination">
          <button
            disabled={page === 1}
            onClick={() => setPage((prev) => prev - 1)}
          >
            Prev
          </button>

          <button
            disabled={page * 4 >= total}
            onClick={() => setPage((prev) => prev + 1)}
          >
            Next
          </button>
        </div>

      </div>
    </div>
  );
}