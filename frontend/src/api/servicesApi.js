import { services } from "../data/services";

const API = import.meta.env.VITE_API_URL;

export async function fetchServices({ page = 1, limit = 10, search = "" }) {
  try {
    // Real API
    if (API) {
      const params = new URLSearchParams({ page, limit, search });

      const response = await fetch(`${API}/services?${params}`);

      if (!response.ok) {
        throw new Error("Failed to fetch services");
      }

      return await response.json();
    }

    // Mock fallback (with delay for skeleton)
    await new Promise((res) => setTimeout(res, 800));

    let filtered = services;

    if (search) {
      filtered = services.filter((s) =>
        s.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    const start = (page - 1) * limit;
    const end = start + limit;

    return {
      data: filtered.slice(start, end),
      total: filtered.length
    };
  } catch (error) {
    throw error;
  }
}