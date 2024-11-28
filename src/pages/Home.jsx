import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-hero">
                <div className="text">
                    <h1>
                        Protect your <br /><span>RIGHTS</span>
                    </h1>
                    <span className="sub-text">Find the right lawyer</span>
                </div>
                <img src="/assets/lawyer.png" alt="" />
            </div>

            <div className="map">
                <h2>Nearest Police Station</h2>
                <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.786755876278!2d8.3288643!3d4.9750746999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106787c86faaaaab%3A0x8f2de14e86b1a335!2sCross%20River%20State%20Police%20Command%20Headquarters!5e0!3m2!1sen!2sng!4v1732793698828!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
        ></iframe>
            </div>

            <div className="map">
                <h2>Nearest Hospital</h2>
                <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.9061409132114!2d8.3346616!3d4.9552662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106786489e1e9917%3A0x45e83d3f1148e0fa!2sASI%20Ukpo%20Hospitals!5e0!3m2!1sen!2sng!4v1732793762792!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
        ></iframe>
            </div>

            <Navbar />
        </div>
    );
}
 
export default Home;