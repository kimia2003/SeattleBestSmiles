import React, { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseconfig";
import { useAuth } from "../../context/AuthContext";

const EditProfile = () => {
  const { user } = useAuth();
  
  // Adding additional state for phone, DOB, and insurance
  const [name, setName] = useState(user.displayName || "");
  const [email, setEmail] = useState(user.email || "");
  const [phone, setPhone] = useState(""); // Initialize with empty string
  const [dob, setDob] = useState(""); // Initialize with empty string
  const [insurance, setInsurance] = useState(""); // Initialize with empty string

  const handleUpdate = async () => {
    try {
      const userDoc = doc(db, "users", user.uid);
      await updateDoc(userDoc, { 
        name, 
        email, 
        phone, 
        dateOfBirth: dob, 
        insurance 
      });
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-bold mb-2">Edit Profile</h2>
      <div className="space-y-2">
        <div>
          <label className="block text-gray-600">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block text-gray-600">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block text-gray-600">Phone Number</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border p-2 rounded"
            placeholder="Enter your phone number"
          />
        </div>
        <div>
          <label className="block text-gray-600">Date of Birth</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block text-gray-600">Insurance</label>
          <input
            type="text"
            value={insurance}
            onChange={(e) => setInsurance(e.target.value)}
            className="w-full border p-2 rounded"
            placeholder="Enter your insurance provider"
          />
        </div>
        <button
          onClick={handleUpdate}
          className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
