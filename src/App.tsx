import HelloWorldComponent from "./components/HelloWorldComponent"


function App() {

  return (
    <div>
      <h1>Hallo</h1>
      <HelloWorldComponent url="http://localhost:8080/helloworld"/>
    </div>
  )
}

export default App