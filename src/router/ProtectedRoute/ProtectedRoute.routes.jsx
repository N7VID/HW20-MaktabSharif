import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const accessToken = localStorage.getItem("accessToken");
  return accessToken ? <Navigate to={"/contacts"} /> : children;
}
