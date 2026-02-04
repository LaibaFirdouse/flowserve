import { services } from "../data/services";

export function fetchServices({ page, limit, search }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let filtered = services;

      if (search) {
        filtered = filtered.filter(s =>
          s.title.toLowerCase().includes(search.toLowerCase())
        );
      }

      const start = (page - 1) * limit;
      const end = start + limit;

      resolve({
        data: filtered.slice(start, end),
        total: filtered.length
      });
    }, 800); // simulate latency
  });
}
