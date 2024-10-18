import HelloWorldComponent from "../components/HelloWorldComponent";

type Props = {
  logout: () => void;
}

export default function LandingPage(props : Props) {
  return (
    <div>
      <h1>Herzlich Willkommen auf der Startseite!</h1>
      <HelloWorldComponent url={import.meta.env.VITE_BASE_URL + "/helloworld/user"} logout={props.logout}/>
    </div>
  )
}