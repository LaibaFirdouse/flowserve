import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function RequireGuest({ children }) {
    const { isAuthenticated, hydrated } = useAuth();

    if (!hydrated) return null;

    if (isAuthenticated) {
        return <Navigate to="/app" replace />;
    }

    return children;
}