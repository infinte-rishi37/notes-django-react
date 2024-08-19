import React from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Layout from './Layout'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ProtectedRoute from './components/protectedRoute'

function Logout() {
  localStorage.clear()
  return <Navigate to = '/login' />
}

function RegisterAndLogOut() {
  localStorage.clear()
  return <Register/>
}

function App() {

  return (
   <>
   <BrowserRouter>
      <Routes>
        <Route 
          path = '/' 
          element = {
            <Layout />
          }
        >
          <Route 
            path=""
            element={
              <ProtectedRoute>
                <Home/>
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login/>} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<RegisterAndLogOut />} />
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App;