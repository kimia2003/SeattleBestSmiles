import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import AboutPage from './components/AboutPage';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} /> {/* Use the About component here */}
      </Routes>
    </Router>
  );
};

export default App;