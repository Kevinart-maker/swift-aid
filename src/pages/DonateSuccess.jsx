import { useNavigate } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const DonateSuccess = () => {
    const navigate = useNavigate()
    
    return (
        <div className="donate-success">
            <DotLottieReact
              src="https://lottie.host/da1bccd6-827a-475e-8917-b5db9b8c2a44/PONMNe8l6I.lottie"
              loop
              autoplay
            />
            <h2>Donation Success!</h2>
            <span>Thanks for giving a helping hand.</span>
            <div className="btn" onClick={()=> navigate('/donate')}>Donate again</div>
        </div>
    );
}
 
export default DonateSuccess;