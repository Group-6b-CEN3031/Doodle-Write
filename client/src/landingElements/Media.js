import React from 'react';
import Slider from 'react-slick';

import redGrip from '../assets/redGrip.jpeg';

class Media extends React.Component {
    render() { 
        return (
            <div id='Media' style={{paddingTop: 125, paddingBottom: 150, paddingLeft: 150, paddingRight: 150, backgroundColor: 'white', opacity: 0.9, borderStyle: 'solid', borderWidth: 2, borderColor: '#FF4AF4'}}>
                <div style={{paddingBottom: 25, textAlign: 'center', fontFamily: 'Arial Rounded MT Bold'}}>Media</div>
                <Slider {...settings}>
                    <div>
                        <img src={redGrip} alt='Red grip'/>
                    </div>
                    <div>
                        <img src={redGrip} alt='Red grip'/>
                    </div>
                    <div>
                        <img src={redGrip} alt='Red grip'/>
                    </div>
                    <div>
                        <img src={redGrip} alt='Red grip'/>
                    </div>
                    <div>
                        <img src={redGrip} alt='Red grip'/>
                    </div>
                </Slider>
            </div>  
        )
    }
}
 
export default Media;   

const settings = {
    dots: true,
    autoplay: true,
    arrows: false,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: '50px',
    adaptiveHeight: true,
    accessibility: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
}