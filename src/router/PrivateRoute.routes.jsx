import { Navigate } from "react-router-dom";
import { AppRoutes } from "../config/routs";

export default function PrivateRoute({ children }) {
  const accessToken = localStorage.getItem("accessToken");
  return accessToken ? children : <Navigate to={AppRoutes.LOGIN} />;
}
