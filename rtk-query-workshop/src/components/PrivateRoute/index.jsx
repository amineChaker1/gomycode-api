import { Navigate } from "react-router-dom";

export function PrivateRoute({ children }) {
  const authUser = false;

  if (!authUser) {
    // not logged in so redirect to login page with the return url
    return <Navigate to="/signin" />;
  }

  // authorized so return child components
  return children;
}
