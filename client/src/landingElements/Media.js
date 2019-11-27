import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import Carousel1 from '../assets/Carousel1.jpeg';
import Carousel2 from '../assets/Carousel2.jpeg';
import redGrip from '../assets/redGrip.jpeg';

class Media extends React.Component {
    render() { 
        return (
            <div id='Media' style={{backgroundColor: 'white', textAlign: 'center'}}>
                <Carousel style={{padding: 50, width:750, display:"inline-block"}}>
                    <Carousel.Item>
                        <img src={redGrip} alt="First slide" className="d-block w-100" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Carousel1} alt="Third slide" className="d-block w-100"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Carousel2} alt="Third slide" className="d-block w-100"/>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}
 
export default Media;