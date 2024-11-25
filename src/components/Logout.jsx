import { signOut } from "firebase/auth";

const handleLogout = async () => {
  try {
    await signOut(auth);
    alert("Logged out successfully");
  } catch (error) {
    console.error("Error during logout", error);
  }
};

// Add this to your component
<button onClick={handleLogout}>Logout</button>;