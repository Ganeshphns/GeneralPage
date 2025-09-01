import { Navigate, Route, Routes } from "react-router-dom";
import CheckAuth from "./components/common/check-auth";
import AuthLayout from "./components/auth/layout";
import AuthLogin from "./pages/user-view/login";
import AuthRegister from "./pages/user-view/register";
import AdminDashBoard from "./pages/admin-view/AdminDashBoard";

import AdminLayout from "./pages/admin-view/layout";

;

import { useDispatch, useSelector } from "react-redux";
import Mobility from "./pages/admin-view/mobility";
import Energy from "./pages/admin-view/energy";
import Connectivty from "./pages/admin-view/connectivty";
import AdminHeatmap from "./pages/admin-view/heatmaps";
import AdminAlertsandReports from "./pages/admin-view/alertreports";
import AdminSettings from "./pages/admin-view/settings";
import UserLayout from "./pages/user-view/layout";
import UserDashboard from "./pages/user-view/dashboard";
import UserHeatmap from "./pages/user-view/heatmap";
import UserAlerts from "./pages/user-view/alerts";
import { checkAuth } from "./store/auth-slice";
import { useEffect } from "react";

function App() {

const {isAuthenticated, user,isLoading}=useSelector((state)=>state.auth);
const dispatch = useDispatch();

 useEffect(() => {
    const token = JSON.parse(sessionStorage.getItem("token"));
    dispatch(checkAuth(token));
  }, [dispatch]);


   
 

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/auth/login" />} />

        <Route
          path="/auth"
          element={
            <CheckAuth>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>

        <Route path="/admin" element={ <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>}>
          <Route path="dashboard" element={<AdminDashBoard />} />
          <Route path="mobility" element={<Mobility />} />
          <Route path="energy" element={<Energy />} />
          <Route path="connectivity" element={<Connectivty />} />
          <Route path="heatmaps" element={<AdminHeatmap />} />
          <Route path="alertreports" element={<AdminAlertsandReports />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>

        <Route
          path="/user"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <UserLayout />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<UserDashboard />} />
          <Route path="heatmap" element={<UserHeatmap />} />
          <Route path="alerts" element={<UserAlerts />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
