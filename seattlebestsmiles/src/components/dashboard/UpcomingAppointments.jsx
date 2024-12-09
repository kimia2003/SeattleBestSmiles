import React, { useEffect, useState } from "react";
import { collection, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseconfig";
import { useAuth } from "../../context/AuthContext";

const UpcomingAppointments = () => {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const appointmentsRef = collection(db, "appointments");
        const snapshot = await getDocs(appointmentsRef);
        const userAppointments = snapshot.docs
          .map((doc) => ({ id: doc.id, ...doc.data() }))
          .filter((appt) => appt.userId === user.uid && appt.status === "Upcoming");

        // If no appointments are found, display a default one
        if (userAppointments.length === 0) {
          setAppointments([
            {
              id: "default",
              service: "Dental Cleaning",
              date: "January 8th, 2025",
              time: "10:00 AM",
            },
          ]);
        } else {
          setAppointments(userAppointments);
        }
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, [user]);

  const handleReschedule = async (id) => {
    try {
      // Implement rescheduling logic here
      alert(`Reschedule logic for appointment ID: ${id}`);
      // Example: Update Firestore appointment date/time here
    } catch (error) {
      console.error("Error rescheduling appointment:", error);
    }
  };

  const handleCancel = async (id) => {
    try {
      if (id === "default") {
        alert("Default appointment cannot be canceled.");
        return;
      }
      const appointmentRef = doc(db, "appointments", id);
      await deleteDoc(appointmentRef);
      setAppointments((prev) => prev.filter((appt) => appt.id !== id));
      alert("Appointment canceled successfully.");
    } catch (error) {
      console.error("Error canceling appointment:", error);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-bold mb-2">Upcoming Appointments</h2>
      {appointments.length === 0 ? (
        <p className="text-gray-600">No upcoming appointments.</p>
      ) : (
        <ul>
          {appointments.map((appt) => (
            <li key={appt.id} className="border-b py-2 flex justify-between items-center">
              <div>
                {appt.service} on {appt.date} at {appt.time}
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => handleReschedule(appt.id)}
                  className="bg-teal-500 text-white py-1 px-3 rounded hover:bg-teal-600"
                >
                  Reschedule
                </button>
                <button
                  onClick={() => handleCancel(appt.id)}
                  className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                >
                  Cancel
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UpcomingAppointments;

