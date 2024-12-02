import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; 
import { useAuth } from './context/AuthContext';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import AboutPage from './components/AboutPage';
import SchedulePage from './components/SchedulePage';
import Login from './components/login/Login';
import Dashboard from './components/login/Dashboard';
import MeetTheDoctor from './components/MeetTheDoctor';
import Gallery from './components/Gallery';
import Accountsetup from './components/login/Accountsetup';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

const App = () => {
  const { user, hasProfile } = useAuth();

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} /> 
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/login" element={
          user
            ? (hasProfile ? <Navigate to="/dashboard" /> : <Navigate to="/accountsetup" />)
            : <Login />
        } />
        <Route path="/dashboard" element={
          user ? <Dashboard /> : <Navigate to="/login" />
        } />
        <Route path="/accountsetup" element={
          user ? <Accountsetup /> : <Navigate to="/login" />
        } />
        <Route path="/meet-the-doctor" element={<MeetTheDoctor />} />
      </Routes>
    </Router>
  );
}

export default App;
