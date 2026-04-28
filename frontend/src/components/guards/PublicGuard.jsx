// src/components/guards/PublicGuard.jsx
import { Navigate, Outlet } from "react-router-dom";
import { useContext, useEffect } from "react";
import UserContext from "../../context/UserContext.js";
import ApiService from "../../utils/ApiService.js";

export function PublicGuard() {
  const { isAuthenticated, setIsAuthenticated } = useContext(UserContext);
  useEffect(() => {
    ApiService.GetData("/user/me").then((response) => {
      if(response.success){
       setIsAuthenticated(true);
      }
    });
  }, []);
  // If logged in, redirect to dashboard
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
}