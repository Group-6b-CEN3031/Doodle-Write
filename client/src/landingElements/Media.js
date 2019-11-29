import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Slider from 'react-slick';

import Carousel1 from '../assets/Carousel1.jpeg';
import Carousel2 from '../assets/Carousel2.jpeg';
import redGrip from '../assets/redGrip.jpeg';

class Media extends React.Component {
    render() { 
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
          };

        return (
            <div>
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />

                <div id='Media' style={{paddingTop: '50px', paddingBottom:'50px', backgroundColor: 'white', opacity: 0.9, borderStyle: 'solid', borderWidth: 2, borderColor: '#FF4AF4'}}>

                

                        <Slider {...settings}>
                            <div>
                                <h3><img src={redGrip} /></h3>
                            </div>
                            <div>
                                <h3><img src={redGrip} /></h3>
                            </div>
                            <div>
                                <h3><img src={redGrip}  /></h3>
                            </div>
                            <div>
                                <h3><img src={redGrip}  /></h3>
                            </div>
                            <div>
                                <h3><img src={redGrip}  /></h3>
                            </div>
                            <div>
                                <h3><img src={redGrip}  /></h3>
                            </div>
                        </Slider>

                   

                </div>
            
            </div>
        
        )
    }
}
 
export default Media;