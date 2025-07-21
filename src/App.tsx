import { Route, Routes } from 'react-router-dom';
import Referral from './pages/Referral';
import Register from './pages/Register';
import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/auth" element={<Register />}/>
      <Route path="/referral" element={<Referral />}/>
      <Route path="/register" element={<Register />}/>
    </Routes>
  )
}

export default App
