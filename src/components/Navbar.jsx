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
                    {/* <span>Home</span> */}
                </NavLink>
                <NavLink to='/legals'>
                <i className="fa-solid fa-magnifying-glass"></i>
                    {/* <span>Search</span> */}
                </NavLink>
                    <i class="fa-solid fa-plus add" onClick={()=> navigate('/complaint')}></i>
                <NavLink to='/profile'>
                <i className="fa-solid fa-user"></i>
                    {/* <span>Profile</span> */}
                </NavLink>
                <NavLink to='/phone' className='phone-icon'>
                <i className="fa-solid fa-phone"></i>
                    {/* <span>Shorts</span> */}
                </NavLink>
            </div>
    );
}
 
export default Navbar;