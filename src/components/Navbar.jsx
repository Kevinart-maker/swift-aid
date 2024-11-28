import { useNavigate, NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const navigate = useNavigate();
    const [activeDiv, setActiveDiv] = useState();

    const handleDivClick = (id) => {
        setActiveDiv(id); // Set the active div by its id
    };

    const handleCall = () => {
        window.location.href = 'tel:+2347016570357';
    }
    
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
                <a href='tel:+2347016570357' className='phone-icon'>
                <i className="fa-solid fa-phone"></i>
                    {/* <span>Shorts</span> */}
                </a>
            </div>
    );
}
 
export default Navbar;