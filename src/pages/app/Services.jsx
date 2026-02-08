import { useState, useMemo,useEffect } from "react";
import { useServices } from "../../hooks/useServices";
import { useDebounce } from "../../hooks/useDebounce";
import { useCart } from "../../context/CartContext";

export default function Services() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [addedId, setAddedId] = useState(null);
  const { addItem } = useCart();
  

  const debouncedSearch = useDebounce(search, 500);

  const { data, total, loading, error } = useServices({
    page,
    limit: 4,
    search: debouncedSearch
  });

  const renderedList = useMemo(() => {
  return data.map(service => (
    <li key={service.id} className="service-card">
      <h4>{service.title}</h4>
      <p>₹{service.price}</p>

      <button
        onClick={() => {
          addItem(service);
          setAddedId(service.id);
        }}
      >
        {addedId === service.id ? "Added ✔" : "Add to Cart"}
      </button>
    </li>
  ));
}, [data, addItem, addedId]);


// useEffect(() => {
//   if (addedId) {
//     const timer = setTimeout(() => setAddedId(null), 1500);
//     return () => clearTimeout(timer);
//   }
// }, [addedId]);


  useEffect(() => {
  setPage(1);
}, [debouncedSearch]);

  if (loading) return <p className="muted">Loading services…</p>;
  if (error) return <p>{error}</p>;
  if (data.length === 0)
  return <p className="muted">No services match your search</p>;

  return (
    <div>
      <h3>Services</h3>

      <input
        placeholder="Search services..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul className="service-grid">
  {renderedList}
</ul>

      <button disabled={page === 1} onClick={() => setPage(p => p - 1)}>
        Prev
      </button>
      <button
        disabled={page * 4 >= total}
        onClick={() => setPage(p => p + 1)}
      >
        Next
      </button>
    </div>
  );
}
