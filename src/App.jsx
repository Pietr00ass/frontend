import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Register from './pages/Register'
import FileBrowser from './pages/FileBrowser'
import Crypto from './pages/Crypto'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<FileBrowser />} />
        <Route path="/crypto" element={<Crypto />} />
      </Routes>
    </BrowserRouter>
  )
}
