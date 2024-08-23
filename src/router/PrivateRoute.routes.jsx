import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { AppRoutes } from "../config/routs";

export default function PrivateRoute({ children }) {
  // const [accessToken, setAccessToken] = useState();
  // useEffect(() => {
  //   if (typeof window !== "undefined" && localStorage) {
  //     setAccessToken(localStorage.getItem("accessToken"));
  //   }
  // }, []);

  return localStorage.getItem("accessToken") ? (
    children
  ) : (
    <Navigate to={AppRoutes.LOGIN} />
  );
}
