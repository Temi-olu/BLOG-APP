import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './Component/NavBar'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import NewPost from './Pages/NewPost'
import EditPost from './Pages/EditPost'
import Dashboard from './Pages/Dashboard'
import Settings from './Pages/Settings'
import AuthProvider from './Context/AuthContext'
import ProctectedRoutes from './Component/ProctectedRoutes'
import Article from './Pages/Article'
import ArticleDetails from './Pages/ArticleDetails'
function App() {
  return (
    <div >

  <BrowserRouter>
  <AuthProvider>
  <NavBar/>
  <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path="/Register" element={<Register/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/newpost" element={<NewPost/>}/>
 <Route path="/editpost" element={<EditPost/>}/>
 <Route path="/dashboard" element={ <ProctectedRoutes><Dashboard/> </ProctectedRoutes>}/>
  <Route path="/settings" element={<Settings/>}/>
  <Route path="/Article" element={<Article/>}/>
   <Route path="/ArticleDetails" element={<ArticleDetails/>}/>
 </Routes>
 </AuthProvider>
 <ToastContainer  autoClose={1000} />
 </BrowserRouter>
    </div>
  )
}

export default App