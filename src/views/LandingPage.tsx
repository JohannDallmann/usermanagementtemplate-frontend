import { useNavigate } from "react-router-dom";
import HelloWorldComponent from "../components/HelloWorldComponent";

type Props = {
  role: string;
  logout: () => void;
}

export default function LandingPage(props : Props) {
const navigate = useNavigate();

  return (
    <div>
      <h1>Herzlich Willkommen auf der Startseite!</h1>
      <HelloWorldComponent url={import.meta.env.VITE_BASE_URL + "/helloworld/user"}/>
      <button onClick={props.logout}>Logout</button>
      {props.role === "role_admin" ? <button onClick={() => navigate("/admin")}>Zum Adminbereich</button> : <></>}
    </div>
  )
}