import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase/firebaseconfig";
import { onAuthStateChanged } from "firebase/auth";

// Create the AuthContext
const AuthContext = createContext();

// Create a custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Holds the authenticated user
  const [loading, setLoading] = useState(true); // Tracks whether auth state is being loaded

  useEffect(() => {
    // Listener to track auth state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return unsubscribe; // Cleanup the listener on unmount
  }, []);

  // AuthContext value to pass to the provider
  const value = {
    user, // Authenticated user
    isAuthenticated: !!user, // Boolean to check if user is logged in
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
