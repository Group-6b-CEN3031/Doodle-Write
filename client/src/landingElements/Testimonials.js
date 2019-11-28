import React from "react";
import {Container, Row, Col, Card} from 'react-bootstrap';
import Axios from "axios";

import quotes from "./../assets/quotes.jpg";

class Testimonials extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            testimonials: [],
        }
    }

    // componentWillMount() {
    //     Axios.get('/testimonials')
    //         .then(response => {
    //             this.setState({testimonials: response.data})
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })
    // }

    render() {
        return (
            <div id='Testimonials' style={{backgroundColor: 'white', opacity: 0.9, borderStyle: 'solid', borderWidth: 2, borderColor: '#63FF4A'}}>
            {this.state.testimonials.length
            ?
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
                            {this.state.testimonials.map((item) => {
                            return (
                                <Col xs={12} md={4} style={{paddingTop: 75}}>
                                    <Card style={{width: "20rem", height: "36rem"}}>
                                        <Card.Body className="d-flex flex-column">
                                            <Card.Title>
                                                <Row className="justify-content-between" style={{marginLeft: 1, marginRight: 1, marginTop: 10}}>
                                                    <h5>{item.name}</h5>
                                                    <h5>{item.credentials}</h5>
                                                </Row>
                                            </Card.Title>
                                            <Card.text>
                                                {item.content}
                                            </Card.text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )})}
                        </Col>
                    </Row>
                </Container>
            :
                <div style={{textAlign: 'center', fontFamily: 'Arial', height: 500}}>
                    No testimnoials currently available.
                </div>
            }
            </div>
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