import { motion } from "framer-motion";

export default function Card({ tag, title, desc, onClick }) {
  return (
    <motion.div
      className="feature-card"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 200 }}
      onClick={onClick}
    >
      <span className="card-tag">{tag}</span>
      <h3>{title}</h3>
      <p>{desc}</p>
    </motion.div>
  );
}
