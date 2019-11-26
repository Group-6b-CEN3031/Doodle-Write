import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import api from "../api";

import Header from "./../components/Header";
import Footer from "./../components/Footer";

import quotes from "./../assets/quotes.jpg";

class Testimonials extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            testimonal: [],
        }
    }

    componentWillMount = async() => {
        await api.displayAll().then (testimonal => {
            this.state ({
                testimonal: testimonal.data.data,
            })
        })
    }

    displayTestimonials(testimonial){
        if (testimonial.length === 0){
            return (
            <ul className="text-center" style={{color: "#5e5e5e"}}>
                <li>No testimnoials currently stored.</li>
            </ul>
            )
        }
        return (
        <ul className="text-left" style={{color: "#5e5e5e"}}>
            <li>{testimonial.content} " -" {testimonial.name} " " {testimonial.credential}</li>
            <li>"I was pleasantly surprised to see how it captured and kept my students attention." -Theresa P. Special Education Teacher</li>
            <li>"My younger art students were able to participate more confidently as they accomplished tasks with the support of the tool that were challenging without it. It brought an instant sense of satisfaction of the kids." -James M. Art Teacher</li>
            <li>"I loved the excitement that showed on my class's face as I showed them what we were using in class that day." -Sharon T. Kindergarten Teacher</li>
            <li>"I found myself using it after my client had left for my boardwork. It was comfortable to use and fun!" -Douglene J. Occupational Therapist</li>
        </ul>
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
                            <displayTestimonials testimonial={this.state.testimonial} /> 
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