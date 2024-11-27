import { NavLink } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>The page you're looking for doesn't exist.</p>
            <NavLink to="/" className="home-link">Go Back Home</NavLink>
        </div>
    );
}
 
export default NotFound;