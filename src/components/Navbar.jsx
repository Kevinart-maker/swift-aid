import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    
    return ( 
        <div className="navbar">
                <span onClick={()=> navigate('/')}>
                    <img src="/assets/home-icn.png" alt="" />
                    <span>Home</span>
                </span>
                <span onClick={()=> navigate('/legals')}>
                    <img src="/assets/group-icn.png" alt="" />
                    <span>Search</span>
                </span>
                    <img className="add" src="/assets/add.png" alt="" />
                <span>
                    <img src="/assets/play-icn.png" alt="" />
                    <span>Shorts</span>
                </span>
                <span onClick={()=> navigate('/profile')}>
                    <img src="/assets/profile-icn.png" alt="" />
                    <span style={{color: '#a4c238'}}>Profile</span>
                </span>
            </div>
    );
}
 
export default Navbar;