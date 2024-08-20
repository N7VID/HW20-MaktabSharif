import { Navigate } from "react-router-dom";
import { selectAuthToken } from "../../redux/slices/authSlice";
import { useSelector } from "react-redux";

export default function PrivateRoute({ children }) {
  const token = useSelector(selectAuthToken);
  console.log(token);
  return token ? children : <Navigate to={"/"} />;
}
