import { useEffect, useState } from "react";
import { fetchServices } from "../api/servicesApi";

export function useServices({ page, limit, search }) {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isCancelled = false;

    setLoading(true);
    setError(null);

    fetchServices({ page, limit, search })
      .then(res => {
        if (!isCancelled) {
          setData(res.data);
          setTotal(res.total);
        }
      })
      .catch(() => {
        if (!isCancelled) setError("Failed to load services");
      })
      .finally(() => {
        if (!isCancelled) setLoading(false);
      });

    return () => {
      isCancelled = true;
    };
  }, [page, limit, search]);

  return { data, total, loading, error };
}
