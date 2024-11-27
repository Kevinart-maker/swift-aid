import React, { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { db, auth } from "../firebase-config"; // Import `auth` here

const AuthStatus = () => {
  const [complaintCount, setComplaintCount] = useState(0);
  const [userId, setUserId] = useState(null);

  const fetchUserComplaintCount = async (userId) => {
    try {
      const complaintsRef = collection(db, "complaints");
      const q = query(complaintsRef, where("userId", "==", userId));
      const querySnapshot = await getDocs(q);
      return querySnapshot.size;
    } catch (error) {
      console.error("Error fetching user complaints:", error);
      return 0;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserId(user.uid);
        const count = await fetchUserComplaintCount(user.uid);
        setComplaintCount(count);
      } else {
        setUserId(null);
        setComplaintCount(0);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      {userId ? (
        <span>{complaintCount}</span>
      ) : (
        ''
      )}
    </>
  );
};

export default AuthStatus;