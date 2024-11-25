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
                        <h2>The Best & Fast <br /> Emergency Response App</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. At corrupti magni alias optio vitae qui ipsam quidem.
                        </p>
                    </div>
                </SplideSlide>
                <SplideSlide className='slide-hero'>
                    <div className="text">
                        <h2>The Best & Fast Emergency Response App</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. At corrupti magni alias optio vitae qui ipsam quidem.
                        </p>
                    </div>
                </SplideSlide>
            </Splide>
            
            <div className="btn" onClick={()=> navigate('/login')}>Next</div>
        </div>
    );
}
 
export default Preview;