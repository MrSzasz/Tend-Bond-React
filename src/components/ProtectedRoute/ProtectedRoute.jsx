import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ children, user, navigateTo = "/" }) => {
  if (!user) {
    return <Navigate to={navigateTo} />;
  }
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
