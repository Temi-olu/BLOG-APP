import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './Component/NavBar'
import Home from './Pages/Home'
import Login from './Pages/Login'

function App() {
  return (
    <div >
  <BrowserRouter>
  <NavBar/>
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path="/login" element={<Login/>}/>
 </Routes>
 </BrowserRouter>
    </div>
  )
}

export default App