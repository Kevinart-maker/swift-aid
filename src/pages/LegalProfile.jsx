import Navbar from '../components/Navbar.jsx';
import dummyData from '../data/dummyData.js';
import { useParams, useNavigate } from "react-router-dom";

const LegalProfile = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const legalData = dummyData.find(item => item.id === id);
    
    return (
        <div className="legal-profile-container">
            <h2><i className="fa-solid fa-arrow-left" onClick={()=> navigate('/legals')}></i> {legalData.name.slice(0, 11)}...</h2>

            <div className="legal-bio">
                <div className="legal-bio-img">
                    <img src={legalData.img} alt={legalData.name} />
                </div>
                <h2>{legalData.name}</h2>
                <span style={{fontWeight: 300}}>{legalData.status}</span>
                <span className="legal-bio-text">
                    {legalData.bio}
                    {legalData.moreBio}
                </span>
                <div className="file-compl" onClick={()=> navigate('/complaint')}>
                    <span>File a Complaint</span>
                    <i className="fa-solid fa-bell"></i>
                </div>
            </div>

            <Navbar />
        </div>
    );
}
 
export default LegalProfile;