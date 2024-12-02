import React from "react";
import { auth } from "../../firebase/firebaseconfig";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const user = auth.currentUser;
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/login"); // Redirect to the login page after logout
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  if (!user) {
    navigate("/login"); // Redirect to login if no user is found
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
    
      <main className="bg-white shadow-lg p-6 mt-8 w-11/12 max-w-lg text-center">
        <h2 className="text-xl font-bold text-gray-700">Your Dashboard</h2>
        <p className="text-gray-600 mt-2">
          Here you can view your profile and manage your appointments.
        </p>

        <button
          onClick={handleLogout}
          className="mt-6 w-full bg-red-500 text-white py-2 rounded shadow hover:bg-red-600"
        >
          Logout
        </button>
      </main>
    </div>
  );
};

export default Dashboard;

