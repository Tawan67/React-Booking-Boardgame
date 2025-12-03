import './App.css'
import MyButton from './components/MyButton'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import Contanct from './pages/Contact';
import Dashboard from './pages/DashBoard';
import About from './pages/About';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      {/* 2. Routes ใช้สำหรับกำหนดเส้นทางทั้งหมด */}
      <Routes>
        {/* 3. Route ใช้กำหนดเส้นทางเดี่ยว ๆ */}
        <Route path="/" element={<Home />} />           {/* หน้าแรก */}
        <Route path='/contact' element={<Contanct />} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>

      
    </>
  )
}


export default App
