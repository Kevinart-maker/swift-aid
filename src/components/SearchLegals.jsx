import { useNavigate } from "react-router-dom";

const SearchLegals = () => {
    const navigate = useNavigate()
    
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
                <div className="legal">
                <div className="left-sec">
                    <div className="legal-img">
                        <img src="/assets/legal.png" alt="" />
                    </div>
                    <div>
                        <h3>Jane Cooper</h3>
                        <span>Associate & co</span>
                    </div>
                </div>
                <div className="status online">
                    Online
                </div>
                </div>
                <div className="legal">
                <div className="left-sec">
                    <div className="legal-img">
                        <img src="/assets/legal2.png" alt="" />
                    </div>
                    <div>
                        <h3>Esther Howard</h3>
                        <span>Associate & co</span>
                    </div>
                </div>
                <div className="status offline">
                    Offline
                </div>
                </div>
            </div>

            <div className="btn">Continue</div>
        </div>
    );
}
 
export default SearchLegals;