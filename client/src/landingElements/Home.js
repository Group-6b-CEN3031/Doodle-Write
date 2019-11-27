import React  from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import AdultWithKids from '../assets/adultWithKids.jpeg';

class Home extends React.Component {
    render() { 
        return (
            <div id='Home' style={{backgroundColor: 'white'}}>
                <Container>
                    <div style={{paddingTop: 50}}>
                        <Row className='justify-content-center'>
                            <div style={{fontFamily: 'Arial Rounded MT Bold', fontSize: 20, letterSpacing: 8, textAlign: 'center', maxWidth: 600}}>MISSION</div>
                        </Row>
                        <Row className='justify-content-center'>
                            <div style={{backgroundColor: '#000000', height: 1, width: 88, margin: 14}}/>
                        </Row>
                        <Row className='justify-content-center'>
                            <div style={{fontFamily: 'Arial', color: '#404040', fontSize: 16, textAlign: 'center', width: 400}}>Our purpose is to initiate excitement with tools that allow everyone to experience the joys of written communications in its many forms.</div>
                        </Row>   
                    </div>
                    <Row style={{padding: 75}}>
                        <Col sm={4} className='align-self-center'>
                            <img src={AdultWithKids} alt='Blue Grip' className='shadow-lg' style={{width: 350}}/>    
                        </Col>
                        <Col sm={1}/>
                        <Col sm={7}>
                            <Row className='justify-content-center'>
                                <div style={{fontFamily: 'Arial Rounded MT Bold', fontSize: 20, letterSpacing: 8, textAlign: 'center', maxWidth: 400}}>FUN AND ENGAGING WRITING SUPPORT !</div>
                            </Row>
                            <Row className='justify-content-center'>
                                <div style={{backgroundColor: '#000000', height: 1, width: 88, margin: 14}}/>
                            </Row>
                            <Row className='justify-content-center'>
                                <div style={{fontFamily: 'Arial', color: '#404040', fontSize: 16, textAlign: 'left'}}>Used by pre-writers, differently developing doodlers and even adults! The earlier children master written communication skills the better they do academically. Handwriting is the number one referral to Occupational Therapist in elementary schools. Often, the reason that older children struggle with handwriting are related to the fundamental skills needed to write NOT just grasp.</div>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
 
export default Home;