
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import Navbar from "./components/Navbar";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        <Router>
      <div className="w-full h-full">
        <Navbar />
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
