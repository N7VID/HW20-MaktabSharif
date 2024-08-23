import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const accessToken = localStorage.getItem("accessToken");
  return accessToken ? children : <Navigate to={"/login"} />;
}
