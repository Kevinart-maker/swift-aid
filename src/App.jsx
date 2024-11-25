import { useState, useEffect } from 'react'
import './App.css'
import Loading from './components/Loading';
import Preview from './pages/Preview';
import Login from './pages/Login';
import Create from './pages/Create';
import AuthStatus from './components/AuthStatus';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
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
            <Routes>
              <Route index element={<Preview />}/>
              <Route path='login' element={<Login />}/>
              <Route path='signup' element={<Create />}/>
              <Route path='dashboard' element={<AuthStatus />}/>
            </Routes>
          </div>
        )
      }
    </>
  )
}

export default App
