import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import LogIn from './pages/login'
import Signup from './pages/signup'
import Home from './pages/home'


function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<LogIn/>}/>
      <Route path='/signup' element={<Signup/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
