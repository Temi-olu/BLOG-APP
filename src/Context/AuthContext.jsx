import { createContext, useState } from "react";

const Authentication = createContext

const [isAuthenticated setIsAuthenticated]=useState()
const[user, setUser]=useState

function login() {
    
}

export default function AuthContext(props) {
<Authentication.Provider >
    {props.children}
</Authentication.Provider>
}
