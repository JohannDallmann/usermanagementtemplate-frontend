import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LandingPage from "../views/LandingPage";
import AdminPage from "../views/AdminPage";
import ProtectedRoutes from "./ProtectedRoutes";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route element={<ProtectedRoutes roles={["role1", "role2"]} currentRole="role1" />}>
          <Route path="/" element={<LandingPage />} />
        </Route>
        <Route element={<ProtectedRoutes roles={["role1"]} currentRole="role1" />}>
          <Route path="/admin" element={<AdminPage />} />
        </Route>
      </Routes>
    </Router>
  )
}
