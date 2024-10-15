import HelloWorldComponent from "../components/HelloWorldComponent";

export default function LandingPage() {
  return (
    <div>
      <h1>Herzlich Willkommen auf der Startseite!</h1>
      <HelloWorldComponent url={import.meta.env.VITE_BASE_URL + "/helloworld"}/>
    </div>
  )
}