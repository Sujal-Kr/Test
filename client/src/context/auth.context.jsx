import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState()
  const [user, setUser] = useState(null)

  const signup = async (credential) => {
    const res = await axios.post('http://localhost:4000/auth/signup', {
      username: credential.username,
      email: credential.email,
      password: credential.password,
      confirmPassword: credential.confirmPassword,
    })
    return res

  }

  const login = async (email, password) => {
    const res = await axios.post('http://localhost:4000/auth/login', {
      email: email,
      password: password
    })

    setUser(res.data)
    localStorage.setItem('user', JSON.stringify(res.data))
    return res
  }
  const logout = async () => {
    try {
      localStorage.removeItem('user')
      const res = axios.get("http//localhost:4000/auth/logout")
      console.log(res.data);
      setUser(null)
    } catch (err) {
      console.log(err.message)
    }

  }
  useEffect(async () => {
    const data = localStorage.getItem('user')
    if (data) {
      setUser(JSON.parse(data))
    } else {
      setUser(null)
    }
  }, [])
  const store = {
    user,
    setUser,
    signup,
    login,
    logout,
  }
  return (
    <AuthContext.Provider value={store}>
      {children}
    </AuthContext.Provider>
  )
}
