import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, googleProvider, db } from "../../firebase/firebaseconfig";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore"; 
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
  
      // After login, check Firestore for the user's profile
      const userDocRef = doc(db, "users", auth.currentUser.uid); // Reference to Firestore doc
      const userDoc = await getDoc(userDocRef);
  
      if (userDoc.exists()) {
        navigate("/dashboard"); // If profile exists, go to dashboard
      } else {
        navigate("/accountsetup"); // If no profile, go to account setup
      }
    } catch (error) {
      console.error("Error logging in with email:", error);
      setError("Invalid email or password. Please try again.");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
  
      // After login, check Firestore for the user's profile
      const userDocRef = doc(db, "users", auth.currentUser.uid); // Reference to Firestore doc
      const userDoc = await getDoc(userDocRef);
  
      if (userDoc.exists()) {
        navigate("/dashboard"); // If profile exists, go to dashboard
      } else {
        navigate("/accountsetup"); // If no profile, go to account setup
      }
    } catch (error) {
      console.error("Error logging in with Google:", error);
      setError("Failed to sign in with Google. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">Welcome to Patient Portal</h1>

      <div className="bg-white p-8 shadow-lg w-full max-w-md">
        {error && <p className="text-red-600 mb-4">{error}</p>}

        <form onSubmit={handleEmailLogin} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full border border-gray-300 p-3"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full border border-gray-300 p-3"
            required
          />
          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-3 hover:bg-teal-600 transition-all shadow-lg"
          >
            Login with Email
          </button>
        </form>

        <div className="my-4 flex items-center">
          <div className="border-t border-gray-300 flex-grow"></div>
          <span className="mx-4 text-gray-500">OR</span>
          <div className="border-t border-gray-300 flex-grow"></div>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full bg-red-500 text-white py-3 hover:bg-red-600 transition-all shadow-lg"
        >
          Sign in with Google
        </button>

        <div className="mt-4 flex justify-between">
          <Link to="/new-patient" className="text-teal-600 hover:underline">
            New Patient
          </Link>
          <Link to="/forgot-password" className="text-teal-600 hover:underline">
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
