import { useEffect, useRef, useState } from "react";
import Keycloak, {  KeycloakConfig } from "keycloak-js";
import axios from "axios";

const initOptions: KeycloakConfig = {
    url: import.meta.env.VITE_IDM_URL,
    realm: import.meta.env.VITE_IDM_REALM,
    clientId: import.meta.env.VITE_IDM_CLIENTID
}

const kc = new Keycloak(initOptions);

export default function useAuth() {
    const isRun = useRef(false);
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const [role, setRole] = useState<string>("no_role");
    
    const logout = kc.logout;
    kc.onTokenExpired = () => logout();

    // set Token for every request in Header
    const setAuth = () => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${kc.token}`;
    }

    // check and update Token if it is close to expire (Tokenupdate-time in seconds) 
    const checkToken = () => {
        kc.updateToken(import.meta.env.VITE_IDM_TOKENUPDATE)
        .then((refreshed) => {
            if (refreshed){
                setAuth();
            }
        })
    }

    useEffect(() => {
        document.addEventListener("mouseup",checkToken);
    }, [])

    // initialize keycloak and start authentication-process
    useEffect(() => {
        if (isRun.current) return;
        isRun.current = true;

        kc.init({
            onLoad: "login-required",
            redirectUri: window.location.href
        })
        .then((response) => {
            const hasClientRoleAdmin : boolean = kc.hasResourceRole("client-admin");
            const hasClientRoleUser : boolean = kc.hasResourceRole("client-user");

            setRole(() => {
                if (hasClientRoleAdmin){
                    return "role_admin";
                } else if (hasClientRoleUser){
                    return "role_user";
                } else {
                    return "no_role";
                }
            })

            setAuth();
            setIsLogin(response);
        })
    }, [])

    return {isLogin, role, logout}
}