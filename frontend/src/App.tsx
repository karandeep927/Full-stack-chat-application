import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import LogIn from './pages/login'
import Signup from './pages/signup'
import Home from './pages/home'
import { ToastContainer } from 'react-toastify'


function App() {
  return (
    <BrowserRouter>
    <ToastContainer autoClose={3000} position='top-center'/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<LogIn/>}/>
      <Route path='/signup' element={<Signup/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
