import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import AboutPage from './components/AboutPage';
import SchedulePage from './components/SchedulePage';  
import ReturningPatient from './components/ReturningPatient'; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} /> 
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/returning-patient" element={<ReturningPatient />} /> 
      </Routes>
    </Router>
  );
};

export default App;