import { useState } from "react";
export default function Providers() {
  const [services, setServices] = useState([
    {
      id: 1,
      title: "Frontend Consultation",
      price: 999
    }
  ]);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const [editingId, setEditingId] = useState(null);
  const handleAddService = () => {
    if (!title || !price) return;

    const newService = {
      id: Date.now(),
      title,
      price: Number(price)
    };

    setServices((prev) => [...prev, newService]);

    setTitle("");
    setPrice("");
  };

  const handleDelete = (id) => {
    setServices((prev) =>
      prev.filter((service) => service.id !== id)
    );
  };

  const handleEdit = (service) => {
    setEditingId(service.id);
    setTitle(service.title);
    setPrice(service.price);
  };

  const handleUpdate = () => {
    setServices((prev) =>
      prev.map((service) =>
        service.id === editingId
          ? {
            ...service,
            title,
            price: Number(price)
          }
          : service
      )
    );

    setEditingId(null);
    setTitle("");
    setPrice("");
  };

  return (
    <div className="providers-page">
      <h1>For service providers</h1>
      <p>Reach the right customers. Grow without friction.</p>

      <div className="provider-features">
        <div className="provider-card">
          <h3>List your services</h3>
          <p>Create transparent offerings with clear pricing.</p>
        </div>

        <div className="provider-card">
          <h3>Manage pricing</h3>
          <p>Use tools like pricing engines and workflows.</p>
        </div>

        <div className="provider-card">
          <h3>Scale confidently</h3>
          <p>We handle discovery, checkout, and trust.</p>
        </div>
      </div>

      <button className="primary">Become a provider</button>
    </div>
  );
}
