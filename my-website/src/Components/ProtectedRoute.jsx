import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isAuth = localStorage.getItem("adminAuth") === "true";

  return isAuth ? children : <Navigate to="/admin" />;
}

export default ProtectedRoute;