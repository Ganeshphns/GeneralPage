import { Navigate, Route, Routes } from "react-router-dom";
import CheckAuth from "./components/common/check-auth";
import AuthLayout from "./components/auth/layout";
import AuthLogin from "./pages/user-view/login";
import AuthRegister from "./pages/user-view/register";
import AdminDashBoard from "./pages/admin-view/AdminDashBoard";

import AdminLayout from "./pages/admin-view/layout";



import { useDispatch, useSelector } from "react-redux";

import AdminSettings from "./pages/admin-view/settings";
import UserLayout from "./pages/user-view/layout";



import { useEffect, useState } from "react";
import ForgotPassword from "./pages/user-view/ForgotPassword";
import ResetPassword from "./pages/user-view/ResetPassword";

import { setUser } from "./store/auth-slice";
import Plans from "./pages/admin-view/plans";
import NewPlans from "./pages/admin-view/newPlans";
import AdminAnalytics from "./pages/admin-view/analytics";
import MySubcription from "./pages/user-view/mySubcription";
import Discounts from "./pages/user-view/discounts";
import UserDashboard from "./pages/user-view/dashboard";
import AdminDiscounts from "./pages/admin-view/discounts";
import Recommendations from "./pages/user-view/recommendations";
import ManageUser from "./pages/admin-view/manageUser";

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    // ✅ Restore from localStorage if available
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    if (token && user) {
      dispatch(setUser({ token, user, isAuthenticated: true }));
    }

    setAuthChecked(true);
  }, [dispatch]);

  if (!authChecked) return <div>Loading...</div>;

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/auth/login" />} />

      {/* Public Routes */}
      <Route
        path="/auth/*"
        element={
          <CheckAuth>
            <AuthLayout />
          </CheckAuth>
        }
      >
        <Route path="login" element={<AuthLogin />} />
        <Route path="register" element={<AuthRegister />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Route>

      {/* Admin Routes */}
      <Route
        path="/admin/*"
        element={
          <CheckAuth>
            <AdminLayout />
          </CheckAuth>
        }
      >
        <Route path="dashboard" element={<AdminDashBoard />} />
        <Route path="plans" element={<Plans />} />
        <Route path="ManagePlans" element={<NewPlans />} />
        <Route path="ManageUsers" element={<ManageUser />} />
        <Route path="Discounts" element={<AdminDiscounts />} />
  
        <Route path="analytics" element={<AdminAnalytics />} />
        <Route path="settings" element={<AdminSettings />} />
      </Route>

      {/* User Routes */}
      <Route
        path="/user/*"
        element={
          <CheckAuth>
            <UserLayout />
          </CheckAuth>
        }
      >
        <Route path="dashboard" element={<UserDashboard />} />
        <Route path="plans" element={<Plans />} />
        <Route path="my-subscriptions" element={<MySubcription />} />
        <Route path="discounts" element={<Discounts />} />
        <Route path="recommendations" element={<Recommendations />} />
        {/* <Route path="analytics" element={<UserAlerts />} /> */}
        {/* <Route path="settings" element={<UserAlerts />} /> */}
      </Route>
    </Routes>
  );
}

export default App;