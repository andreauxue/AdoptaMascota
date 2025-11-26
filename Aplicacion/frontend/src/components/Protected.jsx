import { Navigate } from "react-router-dom";
import { getSession } from "../services/auth";

export default function Protected({ children }) {
  const me = getSession();
  if (!me) return <Navigate to="/login" replace />;
  return children;
}
