import { useNavigate } from "react-router-dom";

const DonateSuccess = () => {
    const navigate = useNavigate()
    
    return (
        <div className="donate-success">
            <img src="/assets/donate.png" alt="donate-img" />
            <h2>Donation Success!</h2>
            <span>Thanks for giving a helping hand.</span>
            <div className="btn" onClick={()=> navigate('/donate')}>Donate again</div>
        </div>
    );
}
 
export default DonateSuccess;