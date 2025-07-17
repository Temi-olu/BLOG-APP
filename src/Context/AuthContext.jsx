import { useState } from "react"
import { createContext } from "react"

export const Authentication = createContext();

export default function AuthProvider(props) {

const [isAuthenticated, setIsAuthenticated]=useState(true)
const [user, setUser]=useState(true)

function login(){
  setUser(login)
  setIsAuthenticated(isAuthenticated)
}

  return (
    <div>
     <Authentication.Provider value={{login, isAuthenticated, user}}>
      {props.children}
    </Authentication.Provider>  

    </div>
  )
}
