import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import AuthStatus from "../components/AuthStatus";
import Navbar from "../components/Navbar";


const Profile = () => {
    const navigate = useNavigate()
    
    const [user, setUser] = useState(null);
    const [logged, setLogged] = useState(false);
    
    const log = logged ? 'logged' : ''

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      });
      return () => unsubscribe();
    }, []);

    console.log('user logged in', user);

    const highlights = [
        {
            id: 1,
            title: "Add",
            img: '/assets/group.png',
        },
        {
            id: 2,
            title: "Hangout",
            img: '/assets/hangout.png',
        },
        {
            id: 3,
            title: "Night",
            img: '/assets/night.png',
        },
        {
            id: 4,
            title: "Friends",
            img: '/assets/friends.png',
        },
        {
            id: 5,
            title: "Nature",
            img: '/assets/nature.png',
        },
        {
            id: 5,
            title: "Nature",
            img: '/assets/nature.png',
        },
        {
            id: 5,
            title: "Nature",
            img: '/assets/nature.png',
        },
        {
            id: 5,
            title: "Nature",
            img: '/assets/nature.png',
        },
        {
            id: 5,
            title: "Nature",
            img: '/assets/nature.png',
        },
    ]

    const stories = highlights.map((story) =>(
        <div className="stories" key={story.id}>
            <img src={story.img} alt={story.title} />
            <span>{story.title}</span>
        </div>
    ))

    const handleLogout = async () => {
        try {
          await signOut(auth);
          alert("Logged out successfully");
        } catch (error) {
          console.error("Error during logout", error);
        }
    };
    
    return (
        <div className="profile-feed-container">
            <div className="heading">
                <h2>
                    <span>{user ? user.displayName || user.email : ''}</span>
                    <i className="fa-solid fa-angle-down"></i>
                </h2>
                <div className="options">
                    <img src="/assets/plus.png" alt="" />
                    <img src="/assets/edit2.png" alt="" />
                    <img onClick={()=> setLogged(!logged)} src="/assets/group2.png" alt="" />

                    <button className={`${log}`} onClick={handleLogout}>Logout</button>
                </div>
            </div>

            <div className="bio-profile">
                <div className="profile-icon">
                    <img src="/assets/profile-icon.png" alt="" />
                    <img src="/assets/edit.png" alt="edit"  className="edit"/>
                </div>
                <h2>{user ? user.displayName : ''}</h2>
                <div className="position"></div>
                <div className="bio">
                </div>
                <div className="web"></div>
            </div>

            <div className="stats">
                <div>
                    <span>0</span>
                    <span className="text">Reviews</span>
                </div>
                <div className="verti-line"></div>
                <div>
                    <AuthStatus />
                    <span className="text">Reported Cases</span>
                </div>
                <div className="verti-line"></div>
                <div>
                    <span>0</span>
                    <span className="text">Solved cases</span>
                </div>
            </div>
            <div className="line"></div>
            <div className="quick-btn">
                <button className="donate-btn" onClick={()=> navigate('/donate')}>Donate</button>
                <button onClick={()=> navigate('/complaint')}>File Complain</button>
                <button>Verify</button>
            </div>
            <div className="nearby">
                <p>Find a nearby Hospital & Police Station</p>
                <span>Report and emergency in a nearby help center</span>
            </div>
            
            <div className="story">
                {stories}
            </div>

            <div className="feed">
                <div className="feed-head">
                    <NavLink>
                        <i className="fa-solid fa-table-cells-large"></i>
                        <span>Feeds</span>
                    </NavLink>
                    <NavLink>
                        <i className="fa-solid fa-video"></i>
                        <span>Shorts</span>
                    </NavLink>
                    <NavLink>
                        <i className="fa-solid fa-users-viewfinder"></i>
                        <span>Tab View</span>
                    </NavLink>
                </div>
                <div className="feed-content">
                    <img src="/assets/feed1.png" alt="" />
                    <img src="/assets/feed2.png" alt="" />
                    <img src="/assets/feed3.png" alt="" />
                </div>
            </div>


            <Navbar />
        </div>
    );
}
 
export default Profile;