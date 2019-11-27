import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Header from './../components/Header';
import Footer from './../components/Footer';
import Carousel1 from './../assets/Carousel1.jpeg';
import Carousel2 from './../assets/Carousel2.jpeg';
import redGrip from './../assets/redGrip.jpeg';

class Media extends React.Component {
    render() { 
        return (
            <React.Fragment>
                <Header tab='Media'/>
                <div style={{textAlign:"center"}}>

                    <Carousel style={{width:750, display:"inline-block"}}>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={redGrip}
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={Carousel1}
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={Carousel2}
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                </div>

                <Footer/>
            </React.Fragment>
        )
    }
}
 
export default Media;