import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseconfig";
import { useAuth } from "../../context/AuthContext";

const VisitHistory = () => {
  const { user } = useAuth();
  const [visits, setVisits] = useState([]);

  useEffect(() => {
    const fetchVisits = async () => {
      try {
        const visitsRef = collection(db, "appointments");
        const snapshot = await getDocs(visitsRef);
        const userVisits = snapshot.docs
          .map((doc) => ({ id: doc.id, ...doc.data() }))
          .filter((appt) => appt.userId === user.uid && appt.status === "Completed");
        setVisits(userVisits);
      } catch (error) {
        console.error("Error fetching visits:", error);
      }
    };

    fetchVisits();
  }, [user]);

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-bold mb-2">Visit History</h2>
      {visits.length === 0 ? (
        <p className="text-gray-600">No visits yet.</p>
      ) : (
        <ul>
          {visits.map((visit) => (
            <li key={visit.id} className="border-b py-2">
              {visit.service} on {visit.date}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default VisitHistory;
