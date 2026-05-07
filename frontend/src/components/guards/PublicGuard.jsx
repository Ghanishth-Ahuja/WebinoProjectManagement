// src/components/guards/PublicGuard.jsx
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import UserContext from "../../context/UserContext.js";
import ApiService from "../../utils/ApiService.js";

export function PublicGuard() {
  const { isAuthenticated, setIsAuthenticated } = useContext(UserContext);
  const location = useLocation();

  useEffect(() => {
    ApiService.GetData("/user/me").then((response) => {
      if(response.success){
       setIsAuthenticated(true);
      }
    });
  }, []);

  // If logged in and not on login page, redirect to dashboard
  if (isAuthenticated && location.pathname !== '/login') {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
}