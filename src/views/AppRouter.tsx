import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import AdminPage from "./AdminPage";

export default function AppRouter() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/admin" element={<AdminPage/>}/>
        </Routes>
    </Router>
  )
}
