import React from 'react'
import { useNavigate,Link } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context'
import { useContext } from 'react'
import axios from 'axios'
function Navbar() {
  const { user,logout } = useContext(AuthContext)
  const navigate = useNavigate()
  console.log(user)
  const handleRoute = () => {
    if (!user) {
      navigate('/auth/login')
    } else {
      logout()
    }
  }
  return (
    <nav className='flex justify-between py-3 px-8'>
      <div className="nav-logo text-2xl">
        <Link to="/">LOGO</Link>
      </div>
      <div className='flex items-center gap-2'>
        <p>{user?.user?.username}</p>
        <button className='bg-black shadow-md px-10 py-2 rounded text-white' onClick={handleRoute}>{user ? "Logout" : "Login"}</button>
      </div>
    </nav>
  )
}

export default Navbar
