import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { authContext } from "../Context/AuthContext";

export const PrivateRoute = ({ children }) => {
  const { isAuth } = useContext(authContext);
  return isAuth ? children : <Navigate to={"/login"} />;
};
