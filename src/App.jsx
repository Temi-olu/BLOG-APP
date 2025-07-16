import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './Component/NavBar'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import NewPost from './Pages/NewPost'
import EditPost from './Pages/EditPost'
function App() {
  return (
    <div >
  <BrowserRouter>
  <NavBar/>
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path="/Register" element={<Register/>}/>
  <Route path="/login" element={<Login/>}/>
   <Route path="/newpost" element={<NewPost/>}/>
 <Route path="/editpost" element={<EditPost/>}/>
 </Routes>
 </BrowserRouter>
    </div>
  )
}

export default App