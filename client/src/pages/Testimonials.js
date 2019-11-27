import React from "react";
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import Axios from "axios";

import Header from "./../components/Header";
import Footer from "./../components/Footer";

import quotes from "./../assets/quotes.jpg";

class Testimonials extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            testimonial: [],
        }
    }

    componentWillMount = async() => {
        Axios.get('/testimonial/data')
            .then(response => {
                this.setState({testimonial: response.data})
            })
            .catch((error) => {
                console.log(error)
            })
    }

    displayTestimonials(){
        if (this.state.testimonial.length == 0){
            return (
            <p className="text-center" style={{color: "#5e5e5e"}}>
                No testimnoials currently stored.
            </p>
            )
        }
        return (
        <Row className="justify-content-around">
            {this.state.testimonial.map((test, index) => {
                return(
                    <Col xs={12} md={4} style={{paddingTop: 75}}>
                        <Card style={{width: "20rem", height: "36rem"}}>
                            <Card.Body className="d-flex flex-column">
                                <Card.Title>
                                    <Row className="justify-content-between" style={{marginLeft: 1, marginRight: 1, marginTop: 10}}>
                                        <h5>{test.name}</h5>
                                        <h5>{test.credentials}</h5>
                                    </Row>
                                </Card.Title>
                                <Card.text>
                                    {test.content}
                                </Card.text>
                            </Card.Body>
                        </Card>
                    </Col>
                )}
            )}
        </Row>
        )
    }

    render() {
        return (
            <React.Fragment>
                <Header tab="Testimonials"/>
                <Container className="text-center" style={{width: "100%"}}>
            	   <div className="row justify-content-center">
            		  <div style={styles.header}>
            		      <p style={styles.h1Text}>WHAT DO PEOPLE THINK?</p>
            		  </div>
            	   </div>
                    <Row>
                        <Col className="align-items-center">
                            <img src={quotes} alt="quotation marks" class="shadow-lg" style={{width: "100%"}}/>
                        </Col>
                        <Col className="d-flex flex-column">
                            <div style={{...styles.grayLine, width: 220}}/>
                            {this.displayTestimonials()}
                        </Col>
                    </Row>
                </Container>
                <div style={{height: 100}}/>
                <Footer/>
            </React.Fragment>
        )
    }
}
 
export default Testimonials;

const styles = {
    sloganBar: {
        background: "#307BFF",
        color: "white",
        textAlign: "center"
    },
    handsImg: {
        maxWidth: "100%"
    },
    header: {
        padding: 40,
    },
    h1Text: {
        background: "black",
        color: "white",
        fontSize: 20,
        padding: 10
    },
    h2Text: {
        fontSize: 30
    }
}