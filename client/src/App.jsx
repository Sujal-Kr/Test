
import './App.css'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import {BrowserRouter as Router,Routes,Route,} from 'react-router-dom'
import SignUp from './components/signup/SignUp'
import Login from './components/login/Login'
import {AuthProvider} from './context/auth.context'
import Profile from './components/profile/Profile'
function App() {
  

  return (
    <AuthProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/auth/signup' element={<SignUp/>}></Route>
          <Route path='/auth/login' element={<Login/>}></Route>
          <Route path='/userProfile' element={<Profile/>}></Route>
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
