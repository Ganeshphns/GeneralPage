import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ children }) {
  const { isAuthenticated, user, isLoading } = useSelector((state) => state.auth);
  const location = useLocation();

  if (isLoading) return <div>Loading...</div>;

  const publicPages = ["/login", "/register", "/forgot-password", "/reset-password"];

  // 🚫 If not authenticated and trying to access private route
  if (!isAuthenticated && !publicPages.some((page) => location.pathname.includes(page))) {
    return <Navigate to="/auth/login" replace />;
  }

  // 🔄 If already authenticated and trying to access public page
  if (isAuthenticated && publicPages.some((page) => location.pathname.includes(page))) {
    return <Navigate to={user?.role === "admin" ? "/admin/dashboard" : "/user/dashboard"} replace />;
  }

  return <>{children}</>;
}

export default CheckAuth;
