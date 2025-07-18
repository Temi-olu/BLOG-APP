import { useContext } from "react"
import {Authentication} from "../Context/AuthContext"
import Register from "../Pages/Register"

function ProctectedRoutes({children}) {
    const {isAuthenticated, user} = useContext(Authentication)
    
 
    return (
    <div>
    {isAuthenticated && user ? children : <Register/>}
    </div>
  )
}

export default ProctectedRoutes;