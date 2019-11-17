import React from "react";
import {Container, Row, Col} from 'react-bootstrap';

import Header from "./../components/Header";
import Footer from "./../components/Footer";

import Hands from "./../assets/hands.jpeg";
import AdultWithKids from "./../assets/adultWithKids.jpeg"
import BlueGrip1 from "./../assets/blueGrip1.jpeg"
import BlueGrip2 from "./../assets/blueGrip2.jpeg"
import BlueGrip3 from "./../assets/blueGrip3.jpeg"
import RedGrip from "./../assets/redGrip.jpeg"

class Home extends React.Component {
    render() { 
        return (
            <React.Fragment>
                <Header tab="Home"/>
                <div style={styles.sloganBar}>PAINT, COLOR, DRAW, WRITE, AND LEARN !!!</div>
                <div>
                    <img src={Hands} alt="Hands" style={styles.handsImg}/>
                </div>
                <Container className="text-center">
                    {/* 
                        Block One 
                    */}
                    <Row className="justify-content-center">
                        <div style={styles.header}>
                            <p style={styles.h1Text}>WRITING FACTS !!!</p>
                        </div>
                    </Row>
                    <Row>
                        <Col>
                            <img src={AdultWithKids} alt="Adult with kids"  className="shadow-lg" style={{width: "100%"}}/>
                        </Col>
                        <Col className="d-flex flex-column">
                            <div style={styles.h2Text}>It's Still Important</div>
                            <div style={{...styles.grayLine, width: 220}}/>
                            <ul className="text-left" style={{color: "#5e5e5e"}}>
                                <li>Studies have shown printing, cursive and keyboarding all stimulate different parts of the brain.</li>
                                <li>Developing fine motor skills early helps with writing, reading and math success!</li>
                                <li>Reading and Writing skills often develop together.</li>
                            </ul>
                        </Col>
                    </Row>
                    {/* 
                        Block Two
                    */}
                    <Row className="justify-content-center">
                        <div style={styles.header}>
                            <p style={styles.h1Text}>PAINT, COLOR, DRAW, WRITE, AND LEARN</p>
                        </div>
                    </Row>
                    {/*
                        Block 2-1
                    */}
                    <Row>
                        <Col className="align-items-center">
                                <img src={BlueGrip1} alt="Blue grip 1" class="shadow-lg" style={{width: "40%"}}/>
                        </Col>
                        <Col className="d-flex flex-column">
                            <div style={styles.h2Text}>Pre-Writing Doodling Makes it Easier to Learn How to Write Letters and Numbers</div>
                            <div style={{...styles.grayLine, width: 525}}/>
                            <ul className="text-left" style={{color: "#5e5e5e"}}>
                                <li>Delayed learners with the assistance of Doodle Write are able to participate in coloring activities, painting projects or writing assignments.</li>
                                <li>With strong hand muscles, children experience less fatigue and hand soreness.</li>
                                <li>We want everyone to be able to draw and color comfortably.</li>
                            </ul>
                        </Col>
                    </Row>
                    {/*
                        Block 2-2
                    */}
                    <div style={{height: 40}}/>
                    <Row>
                        <Col className="d-flex flex-column">
                            <div style={styles.h2Text}>The Sooner the Better</div>
                            <div style={{...styles.grayLine, width: 275}}/>
                            <ul className="text-left" style={{color: "#5e5e5e"}}>
                                <li>Scribbling is a pre-writing skill and helps to develop the skills needed for handwriting.</li>
                                <li>Doodle Write makes gripping small pencils and crayons easier for tiny hands and helps prevent choking.</li>
                                <li>60% of choking deaths in young children are not food related.</li>
                            </ul>
                        </Col>
                        <Col className="align-items-center">
                                <img src={BlueGrip2} alt="Blue grip 2" class="shadow-lg" style={{width: "40%"}}/>
                        </Col>
                    </Row>
                    {/*
                        Block 2-3
                    */}
                    <div style={{height: 40}}/>
                    <Row>
                        <Col className="align-items-center">
                                <img src={BlueGrip3} alt="Blue grip 3" class="shadow-lg" style={{width: "40%"}}/>
                        </Col>
                        <Col className="d-flex flex-column">
                            <div style={styles.h2Text}>In Development, Pre-Writing is Less Familiar Than Grasp Development</div>
                            <div style={{...styles.grayLine, width: 450}}/>
                            <ul className="text-left" style={{color: "#5e5e5e"}}>
                                <li>Preschoolers begin building the skills they need for handwriting through play!</li>
                                <li>Handwriting development begins before a child picks up a pencil.</li>
                                <li>Doodle Write is a  fun new way to  draw , paint, write, color and learn pre-writing  skills with ease!</li>
                            </ul>
                        </Col>
                    </Row>
                    {/* 
                        Block Three
                    */}
                    <Row className="justify-content-center">
                        <div style={styles.header}>
                            <p style={styles.h1Text}>KINDERGARTEN READINESS WITH PRE-WRITING FUN</p>
                        </div>
                    </Row>
                    <Row>
                        <Col className="align-items-center">
                            <img src={RedGrip} alt="Red grip"  class="shadow-lg" style={{width: "40"}}/>
                        </Col>
                        <Col className="d-flex flex-column">
                            <div style={styles.h2Text}>Skill Development vs. Correction</div>
                            <div style={{...styles.grayLine, width: 415}}/>
                            <div className="text-left" style={{color: "#5e5e5e"}}>
                                Handwriting is the number one referral to Occupational Therapist in elementary schools. Often, the reason that older children struggle with handwriting are related to the fundamental skills needed to write NOT  just grasp.
                            </div>
                            <div style={{height: 10}}/>
                            <div style={styles.h2Text}>Drawing as a Pre-Writing Tool</div>
                            <div style={{...styles.grayLine, width: 375}}/>
                            <div className="text-left" style={{color: "#5e5e5e"}}>
                                Pre-writing; scribbling, lines and shapes prepare kids to be able to draw. Drawing is another important step in pre-writing development!
                            </div>
                            <div style={{height: 10}}/>
                            <div style={styles.h2Text}>Eye-Hand Coordination</div>
                            <div style={{...styles.grayLine, width: 310}}/>
                            <div className="text-left" style={{color: "#5e5e5e"}}>
                                Using larger tools before smaller tools may help with a child's hand-eye coordination and control.
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div style={{height: 100}}/>
                <Footer/>
            </React.Fragment>
        )
    }
}
 
export default Home;

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
    },
    grayLine: {
        backgroundColor: '#DEDEDE',
        height: 1,
        marginBottom: 15,
        alignSelf: "center"
    }
}