import { useState, useEffect } from 'react'
import './App.css'
import Loading from './components/Loading';
import Preview from './pages/Preview';
import Login from './pages/Login';
import Create from './pages/Create';
import AuthStatus from './components/AuthStatus';
import { Routes, Route } from 'react-router-dom';
import Language from './pages/Language';
import CreateProfile from './pages/CreateProfile';
import Profile from './pages/Profile';
import ComplaintForm from './pages/ComplaintForm';
import Donate from './pages/Donate';
import DonateSuccess from './pages/DonateSuccess';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase-config';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request or page load delay
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <>
      {
        loading ? (
          <Loading />
        ) : (
            user ? (
              <div>
            <Routes>
              <Route index element={<Preview />}/>
              <Route path='login' element={<Login />}/>
              <Route path='signup' element={<Create />}/>
              <Route path='dashboard' element={<AuthStatus />}/>
              <Route path='language' element={<Language />}/>
              <Route path='createprofile' element={<CreateProfile />}/>
              <Route path='profile' element={<Profile />}/>
              <Route path='complaint' element={<ComplaintForm />}/>
              <Route path='donate' element={<Donate />}/>
              <Route path='donatesuccess' element={<DonateSuccess />}/>
            </Routes>
          </div>
            ) : (
              <Routes>
                <Route path='login' element={<Login />}/>
                <Route path='signup' element={<Create />}/>
              </Routes>
            )
        )
      }
    </>
  )
}

export default App
