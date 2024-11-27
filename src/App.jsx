import { useState, useEffect } from 'react'
import './App.css'
import Loading from './components/Loading';
import Preview from './pages/Preview';
import Login from './pages/Login';
import Create from './pages/Create';
import AuthStatus from './components/AuthStatus';
import { Routes, Route, Navigate } from 'react-router-dom';
import Language from './pages/Language';
import CreateProfile from './pages/CreateProfile';
import Profile from './pages/Profile';
import ComplaintForm from './pages/ComplaintForm';
import Donate from './pages/Donate';
import DonateSuccess from './pages/DonateSuccess';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase-config';
import NotFound from './pages/NotFound';


function App() {
  const [user, setUser] = useState(null);
  console.log('user', user)

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
              <div>
            {/* <Routes>
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
            </Routes> */}

            <Routes>
              <Route path='preview' element={!user ? <Preview /> : <Navigate to="/"/>}/>
              <Route path="login" element={!user ? <Login /> : <Navigate to="/" />}/>
              <Route path="signup" element={user ? <Create /> : <Navigate to="/preview" />}/>
              <Route path="language" element={!user ? <Language /> : <Navigate to="/" />}/>
              <Route path='createprofile' element={user ? <CreateProfile /> : <Navigate to="/preview"/>}/>
              <Route index element={user ? <Profile /> : <Navigate to="/preview"/>} />
              <Route path="complaint" element={user ? <ComplaintForm /> : <Navigate to="/preview"/>} />
              <Route path="donate" element={user ? <Donate /> : <Navigate to="/login"/>} />
              <Route path="donatesuccess" element={user ? <DonateSuccess /> : <Navigate to="/preview"/>} />
              <Route path='*' element={<NotFound />}/>
          </Routes>
          </div>
        )
      }
    </>
  )
}

export default App
