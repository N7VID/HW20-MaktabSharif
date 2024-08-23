import { Navigate } from "react-router-dom";
import { AppRoutes } from "../config/routs";

export default function ProtectedRoute({ children }) {
  const accessToken = localStorage.getItem("accessToken");
  return accessToken ? <Navigate to={AppRoutes.CONTACTS} /> : children;
}
