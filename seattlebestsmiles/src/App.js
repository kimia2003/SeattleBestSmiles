import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import AboutPage from './components/AboutPage';
import SchedulePage from './components/SchedulePage';
import Login from './components/login/Login';
import Dashboard from "./components/login/Dashboard";
import MeetTheDoctor from './components/MeetTheDoctor';
import Gallery from './components/Gallery';
import Accountsetup from './components/login/Accountsetup';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} /> 
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/accountsetup" element={<Accountsetup />} /> 
        <Route path="/meet-the-doctor" element={<MeetTheDoctor />} />
      </Routes>
    </Router>
  );
}

export default App;
