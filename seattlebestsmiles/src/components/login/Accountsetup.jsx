import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase/firebaseconfig"; 
import { useAuth } from "../../context/AuthContext"; 
import { doc, setDoc, getDoc } from "firebase/firestore";

const AccountSetup = () => {
  const { user } = useAuth(); // Access the logged-in user from AuthContext
  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    name: "",
    birthday: "",
    phone: "",
    address: "",
    insuranceProvider: "",
    allergies: "",
  });

  const [loading, setLoading] = useState(true); // To show a loader during fetch
  const [error, setError] = useState(""); // To display errors

  // Fetch existing profile data if available
  useEffect(() => {
    const fetchUserProfile = async () => {
      if (!user) return;

      try {
        const userDocRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          setProfile(userDoc.data());
          navigate("/dashboard")
        }
      } catch (err) {
        console.error("Error fetching user profile:", err);
        setError("Failed to fetch profile data.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [user]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  // Save profile data to Firestore
  const handleSave = async (e) => {
    e.preventDefault();
    if (!user) return;

    try {
      const userDocRef = doc(db, "users", user.uid);
      await setDoc(userDocRef, profile, { merge: true }); 
      alert("Profile updated successfully!");
      navigate("/dashboard"); 
    } catch (err) {
      console.error("Error saving profile:", err);
      setError("Failed to save profile. Please try again.");
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      <header className="bg-blue-600 text-white w-full py-4 text-center shadow">
        <h1 className="text-2xl font-semibold">Set Up Your Account</h1>
        <p className="text-sm">Complete your profile for a better experience.</p>
      </header>

      <main className="bg-white shadow-lg p-6 mt-8 w-11/12 max-w-lg">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Profile Information</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              placeholder="Your Full Name"
              className="w-full border border-gray-300 p-3 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Birthday</label>
            <input
              type="date"
              name="birthday"
              value={profile.birthday}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Phone</label>
            <input
              type="tel"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              placeholder="Your Phone Number"
              className="w-full border border-gray-300 p-3 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Address</label>
            <textarea
              name="address"
              value={profile.address}
              onChange={handleChange}
              placeholder="Your Address"
              className="w-full border border-gray-300 p-3 rounded"
              rows="3"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Insurance Provider</label>
            <input
              type="text"
              name="insuranceProvider"
              value={profile.insuranceProvider}
              onChange={handleChange}
              placeholder="Your Insurance Provider"
              className="w-full border border-gray-300 p-3 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">Allergies</label>
            <textarea
              name="allergies"
              value={profile.allergies}
              onChange={handleChange}
              placeholder="List any allergies"
              className="w-full border border-gray-300 p-3 rounded"
              rows="3"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-3 rounded hover:bg-teal-600 transition-all"
          >
            Save Profile
          </button>
        </form>
      </main>
    </div>
  );
};

export default AccountSetup;

