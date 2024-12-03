import React from "react";
import UpcomingAppointments from "./UpcomingAppointments";
import VisitHistory from "./VisitHistory";
import EditProfile from "./EditProfile";
import ScheduleAppointment from "./ScheduleAppointment";
import { auth } from "../../firebase/firebaseconfig";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-teal-600 text-white p-4 shadow">
        <h1 className="text-2xl font-bold">Patient Dashboard</h1>
      </header>

      <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <UpcomingAppointments />
        <VisitHistory />
        <EditProfile />
        <ScheduleAppointment />
      </div>

      <footer className="text-center mt-8">
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
        >
          Sign Out
        </button>
      </footer>
    </div>
  );
};

export default Dashboard;


