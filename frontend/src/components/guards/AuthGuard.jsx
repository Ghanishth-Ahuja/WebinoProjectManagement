import { useContext, useEffect, useState, useRef } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import UserContext from "../../context/UserContext.js";
import ApiService from "../../utils/ApiService.js";
import { notifyError } from "../../utils/Notification.jsx";
import { Loader, Center } from "@mantine/core";

export function AuthGuard() {
  const { isAuthenticated, setIsAuthenticated, user, setUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const hasNotified = useRef(false); // Track if we already showed notification

  useEffect(() => {
    // Only run once on mount
    ApiService.GetData("/user/me")
      .then((response) => {
        if (response.success) {
          setIsAuthenticated(true);
        }
      })
      .catch((error) => {
        console.log(error);
        setIsAuthenticated(false);
        // Show notification only once
        if (!hasNotified.current) {
          notifyError("Please login to access this page");
          hasNotified.current = true;
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [setIsAuthenticated]);

  useEffect(()=>{
    ApiService.GetData("/user/me").then((response) => {
      if(response.success){
        setUser({name:response.data?.name,email:response.data?.email,id:response.data?.id});
        setIsAuthenticated(true);
      }
    }).catch((error) => {
      console.log(error);
      setUser([]);
    });
  }, []);

  if (isLoading) {
    return (
      <Center style={{ height: "100vh", width: "100vw" }}>
        <Loader color="blue" size="xl" />
      </Center>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
}