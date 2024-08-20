import { useSelector } from "react-redux";
import { selectAuthToken } from "../../redux/slices/authSlice";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = useSelector(selectAuthToken);
  return token ? <Navigate to={"/contacts"} /> : children;
}
