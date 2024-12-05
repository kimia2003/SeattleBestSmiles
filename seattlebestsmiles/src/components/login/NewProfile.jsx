import React, { useState } from "react";
import { auth } from "../../firebase/firebaseconfig"; // Ensure you're importing Firebase correctly
import { createUserWithEmailAndPassword } from "firebase/auth"; // This is the Firebase function to create a user
import { useNavigate } from "react-router-dom"; // To navigate after successful registration

const NewProfile = () => {
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password
  const [error, setError] = useState(""); // State for error messages
  const navigate = useNavigate(); // To navigate to the login page after account creation

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submit behavior

    try {
      // Create a new user with email and password
      await createUserWithEmailAndPassword(auth, email, password);
      
      console.log("Navigating to dashboard...");
      navigate("/dashboard"); 
    } catch (err) {
      console.error("Error creating account:", err);
      setError(err.message); // Set the error message if account creation fails
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Create a New Patient Account</h2>
        
        {error && <p className="text-red-600 mb-4">{error}</p>} {/* Display error if any */}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full border border-gray-300 p-3 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full border border-gray-300 p-3 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-3 rounded hover:bg-teal-600 transition-all"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewProfile;
