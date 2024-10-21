import { useNavigate } from "react-router-dom";
import HelloWorldComponent from "../components/HelloWorldComponent";

export default function AdminPage() {
const navigate = useNavigate();

  return (
    <div>
      <h1>Herzlich Willkommen im Adminbereich!</h1>
      <HelloWorldComponent url={import.meta.env.VITE_BASE_URL + "/helloworld/admin"}/>
      <button onClick={() => navigate("/")}>Zur Startseite</button>
    </div>
  )
}