import Flag from "react-world-flags";

const CreateProfile = () => {
    return (
        <div className="profile-container">
            <h2><i className="fa-solid fa-arrow-left"></i> Fill Your Profile</h2>

            <div className="profiles">
                <div className="profile-icon">
                    <img src="/assets/profile-icon.png" alt="" />
                    <img src="/assets/edit.png" alt="edit"  className="edit"/>
                </div>
                <div className="inputs">
                    <input type="text" placeholder="Full Name" />
                </div>
                <div className="inputs">
                    <input type="text" placeholder="Username" />
                </div>
                <div className="inputs">
                    <input type="text" placeholder="Date of Birth" />
                    <i className="fa-regular fa-calendar-days"></i>
                </div>
                <div className="inputs">
                    <input type="text" placeholder="Email" />
                    <i className="fa-regular fa-envelope"></i>
                </div>
                <div className="inputs">
                    <Flag code='NGA' style={{ width: "25px"}} />
                    <i className="fa-solid fa-angle-down"></i>
                    <input type="number" placeholder="Phone Number" />
                </div>
                <div className="inputs">
                    <input type="text" placeholder="Occupation" />
                </div>
            </div>
            <div className="btn">Continue</div>
        </div>
    );
}
 
export default CreateProfile;