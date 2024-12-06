import React, { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from "../firebase/firebaseconfig";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [hasProfile, setHasProfile] = useState(false);
  const [loading, setLoading] = useState(true);

  // Function to check if user has a profile
  const checkUserProfile = async (user) => {
    const userDocRef = doc(db, "users", user.uid);
    const userDoc = await getDoc(userDocRef);
    setHasProfile(userDoc.exists());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        // Check if the user's profile exists when the auth state changes
        await checkUserProfile(currentUser);
      } else {
        setHasProfile(false);
      }

      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ user, hasProfile, checkUserProfile }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
