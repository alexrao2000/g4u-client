import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/register" element={<Register />}/>
    </Routes>
  )
}

export default App
