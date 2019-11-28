import React from 'react';
import {Navbar, Nav, Container, Row} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookSquare, faTwitterSquare, faInstagram} from '@fortawesome/free-brands-svg-icons';

class Footer extends React.Component {
    render() { 
        return (
            <React.Fragment>
                <div style={{height: 100}}/>
                <Navbar bg='light' expand='lg' sticky='bottom' className='shadow-lg bg-white rounded'>
                    <Nav className='mr-auto'>
                        <Container>
                            <Row>
                                <a href='https://www.facebook.com/' style={{padding: 10}}> 
                                    <FontAwesomeIcon icon={faFacebookSquare} size='2x'/>
                                </a>
                                <a href='https://www.twitter.com/' style={{padding: 10}}> 
                                    <FontAwesomeIcon icon={faTwitterSquare} size='2x'/>
                                </a>
                                <a href='https://www.instagram.com/' style={{padding: 10}}> 
                                    <FontAwesomeIcon icon={faInstagram} size='2x'/>
                                </a>
                            </Row>
                        </Container>
                    </Nav>
                    © 2019 Doodlewrite Co.
                </Navbar>
            </React.Fragment>    
        )
    }
}
 
export default Footer;