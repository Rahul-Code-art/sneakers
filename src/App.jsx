import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './pages/Home'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/profile/Profile";
import ProductDetail from './components/product/ProductDetail'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
   <>
   <ToastContainer position='top-right' autoClose={3000} />
   <Header/>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/login' element={<Login/>} />
   <Route path="/profile" element={
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    }
  />
   <Route path='/register' element={<Register/>} />
<Route path='/product/:slug' element={<ProductDetail/>} />
</Routes>
   </>
  )
}

export default App
