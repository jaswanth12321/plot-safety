import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/Dashboard';
import PropertyMonitoring from './pages/PropertyMonitoring';
import PropertyTracing from './pages/PropertyTracing';
import LegalServices from './pages/LegalServices';
import InvestmentAdvice from './pages/InvestmentAdvice';
import OtherServices from './pages/OtherServices';
import ChatBox from './components/ChatBox';
import AboutUs from './pages/AboutUs';
import { ThemeProvider } from './components/theme-provider';

function App() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="min-h-screen bg-background">
        <Router>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/service/property-monitoring" element={<PropertyMonitoring />} />
                <Route path="/service/property-tracing" element={<PropertyTracing />} />
                <Route path="/service/legal-services" element={<LegalServices />} />
                <Route path="/service/investment-advice" element={<InvestmentAdvice />} />
                <Route path="/service/other-services" element={<OtherServices />} />
              </Routes>
            </main>
            {/* <Footer /> */}
            <ChatBox />
          </div>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App; 