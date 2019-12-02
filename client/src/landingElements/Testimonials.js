import React from "react";
import {Container, Row, Col, Card, CardDeck} from 'react-bootstrap';
import Axios from "axios";
import RedQuote from "./../assets/redquote.png";
import quotes from "./../assets/quotes.jpg";

class Testimonials extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            testimonials: []
        }
    }

    componentWillMount() {
        Axios.get('/testimonials')
            .then(response => {
                this.setState({testimonials: response.data})
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        console.log(this.state.testimonials)
        return (
            <div id='Testimonials' style={{backgroundColor: 'white', opacity: 0.9, borderStyle: 'solid', borderWidth: 2, borderColor: '#63FF4A', paddingBottom: 75}}>
                <Container className="text-center" style={{width: "100%"}}>
                    <div className="row justify-content-center">
                        <div style={{textAlign: 'center', fontFamily: 'Arial Rounded MT Bold', fontSize: 20, letterSpacing: 8, paddingTop: 50, paddingBottom: 50}}>
                            WHAT DO PEOPLE THINK?
                        </div>
                    </div>
                    <Row>
                        <Col className="align-items-center">
                            <img src={quotes} alt="quotation marks" className="shadow-lg" style={{width: "80%"}}/>
                        </Col>
                        
                        <Row style = {{paddingTop:'50px'}}>
                            <CardDeck>
                                <Card>
                                    
                                    <Card.Body>
                                    <Card.Title></Card.Title>
                                    <Card.Img variant="bottom" src={RedQuote} style={{height:'30px',width:'30px'}}/>
                                    <p></p>
                                    <Card.Text style={{fontStyle:'italic', fontWeight:'400'}}>
                                    I was pleasantly surprised to see how it captured and kept my students attention.
                                    </Card.Text>
                                    
                                    <Card.Text style={{fontWeight:'bold'}}>
                                    - Theresa P. (Special Education Teacher)
                                    </Card.Text>
                                    
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src="holder.js/100px160" />
                                    <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This card has supporting text below as a natural lead-in to additional
                                        content.{' '}
                                    </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                    </Card.Footer>
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src="holder.js/100px160" />
                                    <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This card has even longer content than the first to
                                        show that equal height action.
                                    </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                    </Card.Footer>
                                </Card>
                            </CardDeck>
                        
                        
                        
                        
                        </Row>

                        <Col className="d-flex flex-column">
                        {this.state.testimonials.length
                        ?
                            this.state.testimonials.map((item, index) => { return (
                                <div key={index} style={{textAlign: 'left', padding: 10, fontFamily: 'Arial', fontStyle: 'italic', color: '#404040'}}>{item.content}{' - '}<t style={{fontWeight: 'bolder', color: 'black'}}>{item.name}</t>{' '}
                                <t style={{fontWeight: 'bold',fontStyle:'normal',color:'black'}}> ({item.credentials})</t></div>

                            )})
                        :
                            <div style={{textAlign: 'center', padding: 5, fontFamily: 'Arial', fontStyle: 'italic', color: '#404040'}}>No testimnoials currently available.</div>
                        }
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
 
export default Testimonials;