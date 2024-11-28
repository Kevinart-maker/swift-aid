import { useNavigate } from "react-router-dom";
import dummyData from '../data/dummyData.js';

const SearchLegals = () => {
    const navigate = useNavigate()

    const legal = dummyData.map(data => (
        <div className="legal" onClick={()=> navigate(`/legalprofile/${data.id}`)}>
        <div className="left-sec">
            <div className="legal-img">
                <img src={data.img} alt="" />
            </div>
            <div>
                <h3>{data.name}</h3>
                <span>{data.status}</span>
            </div>
        </div>
        <div className={`status ${data.online === 'offline' ? 'offline' : 'online'}`}>
            {data.online}
        </div>
        </div>
    ))
    
    return (
        <div className="legal-container">
            <h2 className="nav"><i className="fa-solid fa-arrow-left" onClick={()=> navigate('/')}></i> Find a Legal Practitioner</h2>
            <p className="short-info">
                Get instant feedback. Contact a lawyer to lay a complain.
            </p>
            <div className="search">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="search" placeholder="Search" />
            </div>
            <div className="legals">
                {legal}
            </div>

            <div className="btn">Continue</div>
        </div>
    );
}
 
export default SearchLegals;