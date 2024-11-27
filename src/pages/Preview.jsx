import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/react-splide/css';
import { useNavigate } from 'react-router-dom';


const Preview = () => {
    const navigate = useNavigate()
    
    return (
        <div className="preview-container">
            <img src="/assets/internet.png" alt="internet-image" />
            <Splide
                options={{
                    arrows: false,
                    rewind: true,
                    type : 'loop',
                    gap: '1rem',
                    autoplay : true,
                }}
                aria-label = "My Favorite Images"
                className="slide-container"
            >
                <SplideSlide className='slide-hero'>
                    <div className="text">
                        <h2>Quick Response</h2>
                        <p>
                            With just a few taps, alert emergency responders to your location.
                        </p>
                    </div>
                </SplideSlide>
                <SplideSlide className='slide-hero'>
                    <div className="text">
                        <h2>Location-based Response</h2>
                        <p>
                            Our system connects you with the nearest emergency services, ensuring a <span>swift</span> response.
                        </p>
                    </div>
                </SplideSlide>
            </Splide>
            
            <div className="btn" onClick={()=> navigate('/login')}>Next</div>
        </div>
    );
}
 
export default Preview;