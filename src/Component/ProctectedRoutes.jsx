import { useContext } from "react"
import {Authentication} from "../Context/AuthContext"
import Login from "../Pages/Login"

function ProctectedRoutes({children}) {
    const {isAuthenticated, user} = useContext(Authentication)
    
 
    return (
    <div>
    {isAuthenticated && user ? children : <Login/>}
    </div>
  )
}

export default ProctectedRoutes;