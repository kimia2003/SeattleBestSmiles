import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
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
        setAppointments(userAppointments);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, [user]);

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-bold mb-2">Upcoming Appointments</h2>
      {appointments.length === 0 ? (
        <p className="text-gray-600">No upcoming appointments.</p>
      ) : (
        <ul>
          {appointments.map((appt) => (
            <li key={appt.id} className="border-b py-2">
              {appt.service} on {appt.date} at {appt.time}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UpcomingAppointments;