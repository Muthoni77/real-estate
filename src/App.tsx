
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import LandingPage from './pages/LandingPage';
import Navbar from "./components/Navbar";
import FAQs from "./pages/FAQ";
import TrustSafety from "./pages/TrustSafety";
import Apartments  from "./pages/Apartment";
import  Amenities  from "./pages/Amenties";
import RequestForm from "./pages/RequestForm";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import VirtualTours from "./pages/VirtualTours";
import { ModalProvider } from "./components/context/ModalContext";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsofService";

function App() {
  // const [count, setCount] = useState(0)

  return (
     <ModalProvider>
   <Router>
      <ScrollToTop />
  <div className="min-h-screen flex flex-col">
    <Navbar />

    {/* Main content grows */}
    <main className="flex-1">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/apartments" element={<Apartments />} />
        <Route path="/virtual-tours" element={<VirtualTours />} />
        <Route path="/amenities" element={<Amenities />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/trust-safety" element={<TrustSafety />} />
        <Route path="/request" element={<RequestForm />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
<Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>

    <Footer />
  </div>
</Router>
</ModalProvider>

  )
}

export default App
