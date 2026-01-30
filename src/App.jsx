import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import Contanct from './pages/Contact';
import Dashboard from './pages/DashBoard';
import About from './pages/About';
import TestPage from './pages/TestPage';
import Navnew from './components/Navnew';
import ButTest from './components/ButTest';
const linksA = [
    {id: 1, path: "/" ,display: "Home"},
    {id: 2, path: "/about" ,display: "About"},
    {id: 3, path: "/contact" ,display: "Contact"},
    {id: 4, path: "/dashboard" ,display: "Dashboard"},
    {id: 5, path: "/test" ,display: "Test Function Page"},
]

function App() {

  return (
    
    <div className="block min-h-screen w-full bg-gray-500 text-black">
      <BrowserRouter>
        <Navnew arrayOfLinks={linksA}></Navnew>
        <div className="p-10 w-full min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/contact' element={<Contanct />} />
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path="/about" element={<About />} />
            <Route path='/test' element={<TestPage />}/>
          </Routes>
        </div>
        </BrowserRouter>
    </div>
    
  )
}


export default App
