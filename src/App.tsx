import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Referral from './pages/Referral';
import Register from './pages/Register';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';

import { AuthProvider } from './contexts/AuthContext';

import './App.css'

function App() {

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="login" element={
          <ProtectedRoute>
            <Login />
          </ProtectedRoute>
        }/>
        <Route path="/register" element={
          <ProtectedRoute>
            <Register />
          </ProtectedRoute>
        }/>
        <Route path="/referral" element={<Referral />}/>
      </Routes>
    </AuthProvider>
  )
}

export default App
