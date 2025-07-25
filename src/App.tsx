import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Referral from './pages/Referral';
import Register from './pages/Register';

import { AuthProvider } from './contexts/AuthContext';

import './App.css'

function App() {

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/referral" element={<Referral />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </AuthProvider>
  )
}

export default App
