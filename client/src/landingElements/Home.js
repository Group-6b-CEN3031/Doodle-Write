import React  from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';

import AdultWithKids from '../assets/adultWithKids.jpeg';

class Home extends React.Component {
    render() { 
        this.props.adminAuthenticated(false)
        return (
            <div id='Home' style={{backgroundColor: 'white', opacity: 0.9, borderStyle: 'solid', borderWidth: 2, borderColor: '#33C1FF'}}>
                <Container>
                    <div style={{paddingTop: 50}}>
                        <Row className='justify-content-center'>
                            <div style={{fontFamily: 'Arial Rounded MT Bold', fontSize: 20, letterSpacing: 8, textAlign: 'center', maxWidth: 600}}>MISSION</div>
                        </Row>
                        <Row className='justify-content-center'>
                            <div style={{backgroundColor: '#000000', height: 1, width: 300, margin: 14}}/>
                        </Row>
                        <Row className='justify-content-center'>
                            <div style={{fontFamily: 'Arial', color: '#404040', fontSize: 16, textAlign: 'center', width: 400}}>Our purpose is to initiate excitement with tools that allow everyone to experience the joys of written communications in its many forms.</div>
                        </Row>   
                    </div>
                    <Row style={{padding: 75}}>
                        <Col sm={4} className='align-self-center'>
                            <img src={AdultWithKids} alt='Blue Grip' className='shadow-lg' style={{width: 350, marginBottom: 20}}/>   
                            
                        </Col>
                        <Col sm={1}/>
                        <Col sm={7}>
                            <Row className='justify-content-center'>
                                <div style={{fontFamily: 'Arial Rounded MT Bold', fontSize: 20, letterSpacing: 8, textAlign: 'center', maxWidth: 400}}>FUN AND ENGAGING WRITING SUPPORT !</div>
                            </Row>
                            <Row className='justify-content-center'>
                                <div style={{backgroundColor: '#000000', height: 1, width: 500, margin: 14}}/>
                            </Row>
                            <Row className='justify-content-center'>
                                <div style={{fontFamily: 'Arial', color: '#404040', fontSize: 16, textAlign: 'center'}}>Used by pre-writers, differently developing doodlers and even adults! The earlier children master written communication skills the better they do academically. Handwriting is the number one referral to Occupational Therapist in elementary schools. Often, the reason that older children struggle with handwriting are related to the fundamental skills needed to write NOT just grasp.</div>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
 
function mapStateToProps(state){
    return{}
}
  
function mapDispatchToProps(dispatch){
    return{
        adminAuthenticated: (value) => dispatch({type: 'ADMIN_AUTHENTICATED', value})
    }
}
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));