import { Route, Routes } from 'react-router-dom';
import Referral from './pages/Referral';
import Register from './pages/Register';
import Auth from './pages/Auth';
import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/auth" element={<Auth />}/>
      <Route path="/referral" element={<Referral />}/>
      <Route path="/register" element={<Register />}/>
    </Routes>
  )
}

export default App
