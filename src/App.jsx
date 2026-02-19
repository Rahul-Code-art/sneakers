import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './pages/Home'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/profile/Profile";

function App() {

  return (
   <>
   <Header/>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/login' element={<Login/>} />
   <Route
    path="/profile"
    element={
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    }
  />
   <Route path='/register' element={<Register/>} />
</Routes>
   </>
  )
}

export default App
