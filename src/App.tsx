import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Referral from './pages/Referral';
import Register from './pages/Register';
import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/referral" element={<Referral />}/>
      <Route path="/register" element={<Register />}/>
    </Routes>
  )
}

export default App
