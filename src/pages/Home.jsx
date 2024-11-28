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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31799.256451700963!2d8.313279663560206!3d4.955113985812299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1067863603a882e1%3A0xb1c9e9b57b719d6e!2sBogoberi%2C%20Calabar%20540281%2C%20Cross%20River!5e0!3m2!1sen!2sng!4v1732754352071!5m2!1sen!2sng"
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127185.27129015603!2d8.280525745872213!3d5.015814103788819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105d7d855cacd2bb%3A0x69af84a8dca692a!2sCalabar%20Municipal%2C%20Cross%20River!5e0!3m2!1sen!2sng!4v1732749907543!5m2!1sen!2sng"
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