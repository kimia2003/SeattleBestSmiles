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

        // Add a hardcoded previous visit for demonstration
        if (userVisits.length === 0) {
          setVisits([
            {
              id: "sample",
              service: "Dental Exam",
              date: "November 20th, 2023",
              notes: "Teeth cleaned thoroughly, no cavities detected.",
              bill: "$120",
            },
          ]);
        } else {
          setVisits(userVisits);
        }
      } catch (error) {
        console.error("Error fetching visits:", error);
      }
    };

    fetchVisits();
  }, [user]);

  const handleViewNotes = (notes) => {
    alert(`Visit Notes: ${notes}`);
  };

  const handleViewBill = (bill) => {
    alert(`Total Bill: ${bill}`);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-bold mb-2">Visit History</h2>
      {visits.length === 0 ? (
        <p className="text-gray-600">No visits yet.</p>
      ) : (
        <ul>
          {visits.map((visit) => (
            <li key={visit.id} className="border-b py-2 flex justify-between items-center">
              <div>
                {visit.service} on {visit.date}
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => handleViewNotes(visit.notes)}
                  className="bg-teal-500 text-white py-1 px-3 rounded hover:bg-teal-600"
                >
                  View Notes
                </button>
                <button
                  onClick={() => handleViewBill(visit.bill)}
                  className="bg-teal-500 text-white py-1 px-3 rounded hover:bg-teal-600"
                >
                  View Bill
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default VisitHistory;

