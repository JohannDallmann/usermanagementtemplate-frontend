import HelloWorldComponent from "./components/HelloWorldComponent"


function App() {

  return (
    <div>
      <h1>Hallo</h1>
      <HelloWorldComponent url={import.meta.env.VITE_BASE_URL + "/helloworld"}/>
    </div>
  )
}

export default App