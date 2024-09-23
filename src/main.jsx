import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/Home';  
import './index.css';
import ContactPage from './components/Contact';
import ServicesPage from './components/servicepage';
import SignUpPage from './components/Signup';
import LoginPage from './components/Login';
import FeedbackForm from './components/Feedback';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
   
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/feedback" element={<FeedbackForm/>}/>
      </Routes>

    </BrowserRouter>
  </StrictMode>
);
