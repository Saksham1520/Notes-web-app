import React from "react";
import { useFirebase } from "../Context/Firebase";
import { Navigate } from "react-router-dom";

function ProtectedRoutes({ children }) {
  const firebase = useFirebase();
  if (!firebase.isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoutes;
