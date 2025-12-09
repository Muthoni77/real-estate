import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Homepage from './pages/HomePage';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Router>
      <div className="w-full h-full">
        {/* <Navbar /> */}
        <div className="">
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/" element={<LandingPage/>} />
          </Routes>
        </div>
        {/* <Footer/> */}
      </div>
    </Router>
       
    </>
  )
}

export default App
