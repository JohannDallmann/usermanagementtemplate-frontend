import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LandingPage from "../views/LandingPage";
import AdminPage from "../views/AdminPage";
import ProtectedRoutes from "./ProtectedRoutes";

type Props = {
  role : string;
  logout : () => void;
}

export default function AppRouter(props : Props) {
  return (
    <Router>
      <Routes>
        <Route element={<ProtectedRoutes roles={["role_admin", "role_user"]} currentRole={props.role} />}>
          <Route path="/" element={<LandingPage logout={props.logout} role={props.role}/>} />
        </Route>
        <Route element={<ProtectedRoutes roles={["role_admin"]} currentRole={props.role} />}>
          <Route path="/admin" element={<AdminPage />} />
        </Route>
      </Routes>
    </Router>
  )
}
