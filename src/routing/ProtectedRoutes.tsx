import { Navigate, Outlet } from "react-router-dom";

type Props = {
    roles : string[];
    currentRole : string;
}

export default function ProtectedRoutes(props:Props) {
  
const hasPermission = () => {
    return props.roles.includes(props.currentRole);
}

  const authenticated : boolean = hasPermission();

    return (
    authenticated ? <Outlet/> : <Navigate to={"/"}/>
  )
}
