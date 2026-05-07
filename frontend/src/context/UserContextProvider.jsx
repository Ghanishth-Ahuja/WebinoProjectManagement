import {useState} from "react";
import AuthContext from "./UserContext.js";

export function UserContextProvider({ children }) {
  const [user, setUser] = useState({name:"",email:""});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ user, setUser, isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
    )
}

