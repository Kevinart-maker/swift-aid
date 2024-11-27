import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";


const Profile = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState(null);

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      });
      return () => unsubscribe();
    }, []);

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
    
    return (
        <div className="profile-feed-container">
            <div className="heading">
                <h2>
                    <span>{user.displayName}</span>
                    <i className="fa-solid fa-angle-down"></i>
                </h2>
                <div className="options">
                    <img src="/assets/plus.png" alt="" />
                    <img src="/assets/edit2.png" alt="" />
                    <img src="/assets/group2.png" alt="" />
                </div>
            </div>

            <div className="bio-profile">
                <div className="profile-icon">
                    <img src="/assets/profile.png" alt="" />
                    <img src="/assets/edit.png" alt="edit"  className="edit"/>
                </div>
                <h2>{user.displayName}</h2>
                <div className="position">Change Maker</div>
                <div className="bio">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ab natus quo non, aliquid consequuntur nobis cumque a.
                </div>
                <div className="web">www.warf.com</div>
            </div>

            <div className="stats">
                <div>
                    <span>297</span>
                    <span className="text">Reviews</span>
                </div>
                <div className="verti-line"></div>
                <div>
                    <span>356</span>
                    <span className="text">Reported Cases</span>
                </div>
                <div className="verti-line"></div>
                <div>
                    <span>208</span>
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


            <div className="navbar">
                <span>
                    <img src="/assets/home-icn.png" alt="" />
                    <span>Home</span>
                </span>
                <span>
                    <img src="/assets/group-icn.png" alt="" />
                    <span>Search</span>
                </span>
                    <img className="add" src="/assets/add.png" alt="" />
                <span>
                    <img src="/assets/play-icn.png" alt="" />
                    <span>Shorts</span>
                </span>
                <span>
                    <img src="/assets/profile-icn.png" alt="" />
                    <span style={{color: '#a4c238'}}>Profile</span>
                </span>
            </div>
        </div>
    );
}
 
export default Profile;