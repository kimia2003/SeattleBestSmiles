import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import AboutPage from "./components/AboutPage";
import SchedulePage from "./components/SchedulePage";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import MeetTheDoctor from "./components/MeetTheDoctor";
import Gallery from "./components/Gallery";
import Accountsetup from "./components/login/Accountsetup";
import NewProfile from "./components/login/NewProfile";
import EditProfile from "./components/dashboard/EditProfile"; // Import EditProfile
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  const { user, hasProfile } = useAuth();

  // Auth-based redirection logic
  const AuthRedirect = ({ children }) => {
    if (!user) return <Navigate to="/login" />;
    if (!hasProfile) return <Navigate to="/accountsetup" />;
    return children;
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/meet-the-doctor" element={<MeetTheDoctor />} />
        <Route
          path="/login"
          element={
            user
              ? hasProfile
                ? <Navigate to="/dashboard" />
                : <Navigate to="/accountsetup" />
              : <Login />
          }
        />
        <Route path="/newprofile" element={<NewProfile />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <AuthRedirect>
              <Dashboard />
            </AuthRedirect>
          }
        />
        <Route
          path="/accountsetup"
          element={
            user ? <Accountsetup /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/editprofile"
          element={
            <AuthRedirect>
              <EditProfile />
            </AuthRedirect>
          }
        />

        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
