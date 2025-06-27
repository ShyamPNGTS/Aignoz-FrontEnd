import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Blogs from './pages/blogs';
import Login from './pages/login';
import Signup from './pages/signup';
import Contact from './pages/contact';
import PrivacyPolicy from './pages/privacy-policy';
import TermsAndConditions from './pages/terms-and-conditions';
import RefundPolicy from './pages/refund-policy';
import BlogDetail from './pages/blogs-detail';
import Appointment from './pages/appointment';
import ForgotPassword from './pages/forgot-password';
import AppointmentDetail from './pages/appointment-detail';
import ResetPassword from './pages/reset-password';
import AppointmentConfirm from './pages/appointment-detail-confirm';

function AppWrapper() {
  const location = useLocation();
  const hideNavbarFooter = ["/login", "/signup", "/forgot-password", "/reset-password"].includes(location.pathname);

  return (
    <>
      {!hideNavbarFooter && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/appointment" element={<Appointment />} />
         <Route path="/appointment/:id" element={<AppointmentDetail />} />
         <Route path="/confirm-appointment/:id" element={<AppointmentConfirm />} />
      </Routes>

      {!hideNavbarFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
