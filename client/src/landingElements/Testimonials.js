import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import Axios from "axios";

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