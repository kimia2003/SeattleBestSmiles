import React, { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseconfig";
import { useAuth } from "../../context/AuthContext";

const EditProfile = () => {
  const { user } = useAuth();
  const [name, setName] = useState(user.displayName || "");
  const [email, setEmail] = useState(user.email || "");

  const handleUpdate = async () => {
    try {
      const userDoc = doc(db, "users", user.uid);
      await updateDoc(userDoc, { name, email });
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
        <button
          onClick={handleUpdate}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditProfile;


