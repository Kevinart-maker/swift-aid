import { useState } from 'react';
import Loading from '../components/Loading';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../firebase-config';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const handleGoogleLogin = async ()=>{
        setLoading(true)
        setError("");
        setSuccess("");
        
        const provider = new GoogleAuthProvider();
        try{
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            setSuccess("Account created successfully!");
            console.log('User Info: ', user);
            alert(`Welcome ${user.displayName}`)
            setLoading(false)
            navigate('/')
        }catch(error){
            setError(err.message); 
            console.error("Error during login", error)
            alert("Login Failed")
            setLoading(false)
        }
    }
    
    return (
        <>
            {
                loading ? (
                    <Loading />
                ) : (
                    <div className="login-container">
            <img className="head-img" src="/assets/social.png" alt="login_with_socials" />
                <h2>Get started <br /> with SwiftAid</h2>

                <div className="login-options">
                    <button className="logins-btn">
                        <img src="/assets/facebook.png" alt="google-icon" />
                        <span>Continue with Facebook</span>
                    </button>
                    <button className="logins-btn" onClick={handleGoogleLogin}>
                        <img src="/assets/google.png" alt="google-icon" />
                        <span>Continue with Google</span>
                    </button>
                    <button className="logins-btn">
                        <img src="/assets/apple.png" alt="google-icon" />
                        <span>Continue with Apple</span>
                    </button>
                </div>

                <div className="lines">
                    <div className="line"></div>
                    <span>or</span>
                    <div className="line"></div>
                </div>
                {error && <p style={{ color: "red" }}>{error}</p>}
                {success && <p style={{ color: "green" }}>{success}</p>}

                <div className="btn">Sign in with password</div>
                <div className="no-btn">Don't have an account? <span onClick={()=> navigate('/signup')}>Sign up</span></div>
        </div>
                )
            }
        </>
    );
}
 
export default Login;