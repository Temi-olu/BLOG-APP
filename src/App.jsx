import { Route, Routes } from 'react-router-dom'
import NavBar from './Component/NavBar'
import Home from './Pages/Home'

function App() {
  return (
    <div >
   <NavBar/>
 <Routes>
  <Route path='/' element={<Home/>}/>
 </Routes>
    </div>
  )
}

export default App