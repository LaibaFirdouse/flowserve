import { useState, useMemo } from "react";
import { useServices } from "../../hooks/useServices";
import { useDebounce } from "../../hooks/useDebounce";

export default function Services() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 500);

  const { data, total, loading, error } = useServices({
    page,
    limit: 4,
    search: debouncedSearch
  });

  const renderedList = useMemo(() => {
    return data.map(service => (
      <li key={service.id}>
        {service.title} — ₹{service.price}
      </li>
    ));
  }, [data]);
//   useEffect(() => {
//   setPage(1);
// }, [debouncedSearch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (data.length === 0) return <p>No services found</p>;

  return (
    <div>
      <h3>Services</h3>

      <input
        placeholder="Search services..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>{renderedList}</ul>

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
