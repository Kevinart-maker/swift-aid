import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";

const AuthStatus = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {user ? (
        <p>Welcome, {user.displayName}</p>
      ) : (
        <p>No user logged in</p>
      )}
    </div>
  );
};

export default AuthStatus;