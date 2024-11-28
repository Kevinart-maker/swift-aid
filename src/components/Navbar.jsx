import { useNavigate, NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const navigate = useNavigate();
    const [activeDiv, setActiveDiv] = useState();

    const handleDivClick = (id) => {
        setActiveDiv(id); // Set the active div by its id
    };
    
    return ( 
        <div className="navbar">
                <NavLink to='/'>
                <i className="fa-solid fa-house"></i>
                    <span>Home</span>
                </NavLink>
                <NavLink to='/legals'>
                <i className="fa-solid fa-magnifying-glass"></i>
                    <span>Search</span>
                </NavLink>
                    <i class="fa-solid fa-plus add" onClick={()=> navigate('/complaint')}></i>
                <NavLink to='/short'>
                <i className="fa-solid fa-circle-play"></i>
                    <span>Shorts</span>
                </NavLink>
                <NavLink to='/profile'>
                <i className="fa-solid fa-user"></i>
                    <span style={{color: '#a4c238'}}>Profile</span>
                </NavLink>
            </div>
    );
}
 
export default Navbar;