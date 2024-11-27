import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-hero">
                <div className="text">
                    <h1>
                        Protect your <span>RIGHTS</span>
                    </h1>
                    <span className="sub-text">Find the right lawyer</span>
                </div>
                <img src="/assets/lawyer.png" alt="" />
            </div>

            <div className="map">
                <h2>Nearest Police Station</h2>
                <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126845.96932303235!2d3.281126453289675!3d6.529699313735785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9228fa2a3999%3A0xd7a8324bddbba1f0!2sIkeja%2C%20Lagos!5e0!3m2!1sen!2sng!4v1732747970738!5m2!1sen!2sng"
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126845.96932303235!2d3.281126453289675!3d6.529699313735785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9228fa2a3999%3A0xd7a8324bddbba1f0!2sIkeja%2C%20Lagos!5e0!3m2!1sen!2sng!4v1732747970738!5m2!1sen!2sng"
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