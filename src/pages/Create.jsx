import { useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase-config";
import Loading from "../components/Loading";
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordStrength, setPasswordStrength] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    
    const [activeDiv, setActiveDiv] = useState();
    const [passwordVisible, setPasswordVisible] = useState(false);

    const validatePassword = (value) => {
        const minLength = value.length >= 8;
        const hasUpperCase = /[A-Z]/.test(value);
        const hasLowerCase = /[a-z]/.test(value);
        const hasNumber = /[0-9]/.test(value);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);

        if (!minLength) return "Password must be at least 8 characters long.";
        if (!hasUpperCase) return "Password must include at least one uppercase letter.";
        if (!hasLowerCase) return "Password must include at least one lowercase letter.";
        if (!hasNumber) return "Password must include at least one number.";
        if (!hasSpecialChar) return "Password must include at least one special character.";
        
        return "Strong password!";
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        setPasswordStrength(validatePassword(value));
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible((prevState) => !prevState);
    };
    
    const handleDivClick = (id) => {
        setActiveDiv(id); // Set the active div by its id
    };

    const handleSignUp = async (event) => {
        event.preventDefault();
        setError("");
        setSuccess("");

        if (passwordStrength !== "Strong password!") {
            setError("Please create a strong password.");
            return;
        }

        setLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            setSuccess("Account created successfully!");
            console.log("User:", userCredential.user); 
            setLoading(false);
            navigate('/language');
        } catch (err) {
            setLoading(false);
            setError(err.message);
        }
    };

    const handleGoogleSignUp = async () => {
        setLoading(true);
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            console.log("User signed up with Google:", result.user);
            setSuccess("Account created successfully!");
            setLoading(false);
            navigate('/language');
        } catch (err) {
            setLoading(false);
            setError(err.message);
        }
    };

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div className="create-container">
                    <i className="fa-solid fa-arrow-left" onClick={() => navigate('/login')}></i>
                    <h2>Create your <br /> Account</h2>
                    <div className="inputs">
                        <div className={`input ${activeDiv === 1 ? "active" : ""}`}
                onClick={() => handleDivClick(1)}>
                            <i className="fa-solid fa-envelope"></i>
                            <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} required />
                        </div>
                        <div className={`input ${activeDiv === 2 ? "active" : ""}`}
                onClick={() => handleDivClick(2)}>
                            <i className="fa-solid fa-user-lock"></i>
                            <select name="" id="">
                                <option value="" disabled selected>Select Account Type</option>
                            </select>
                        </div>
                        <div className={`input ${activeDiv === 3 ? "active" : ""}`}
                onClick={() => handleDivClick(3)}>
                            <i className="fa-solid fa-phone"></i>
                            <input type="number" name="" id="" />
                        </div>
                        <div className={`input ${activeDiv === 4 ? "active" : ""}`}
                onClick={() => handleDivClick(4)}>
                            <i className="fa-solid fa-lock"></i>
                            <input type={passwordVisible ? "text" : "password"} value={password} onChange={handlePasswordChange} required />
                            <i className={passwordVisible ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'} onClick={togglePasswordVisibility}></i>
                            <p style={{ color: passwordStrength === "Strong password!" ? "green" : "red" }}>
                                {passwordStrength}
                            </p>
                        </div>
                        <div className={`checkbox`}>
                            <input type="checkbox" name="" id="" />
                            <span>Remember me</span>
                        </div>
                     </div>
                    <div className="btn" onClick={handleSignUp}>Sign up</div>
                    <div className="lines">
                        <div className="line"></div>
                        <span>or continue with</span>
                        <div className="line"></div>
                    </div>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    {success && <p style={{ color: "green" }}>{success}</p>}
                    <div className="socials">
                        <img src="/assets/facebook.png" alt="" />
                        <img src="/assets/google.png" onClick={handleGoogleSignUp} alt="" />
                        <img src="/assets/apple.png" alt="" />
                    </div>
                    <div className="not-btn">
                        Already have an account? <span onClick={() => navigate('/login')}>Sign in</span>
                    </div>
                </div>
            )}
        </>
    );
};

export default Create;