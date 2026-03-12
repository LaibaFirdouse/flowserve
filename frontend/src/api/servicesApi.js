// export async function fetchServices({ page = 1, limit = 10, search = "" }) {
//   const params = new URLSearchParams({
//     page,
//     limit,
//     search
//   });

//   const response = await fetch(
//     `http://localhost:5000/api/services?${params.toString()}`
//   );

//   if (!response.ok) {
//     throw new Error("Failed to fetch services");
//   }

//   return response.json();
// }
const API = import.meta.env.VITE_API_URL;

export async function fetchServices({ page = 1, limit = 10, search = "" }) {
  const params = new URLSearchParams({
    page,
    limit,
    search
  });

  const response = await fetch(`${API}/services?${params}`);

  if (!response.ok) {
    throw new Error("Failed to fetch services");
  }

  return response.json();
}