import useAuth from "./hooks/useAuth"
import AppRouter from "./routing/AppRouter"


function App() {
  const {isLogin, role, logout} = useAuth();

  return (
    isLogin ?
    <div>
      <AppRouter role={role} logout={logout}/>
    </div> :
    <></>
  )
}

export default App