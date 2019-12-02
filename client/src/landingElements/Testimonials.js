import React from "react";
import {Container, Card, CardDeck} from 'react-bootstrap';
import Axios from "axios";
import RedQuote from "./../assets/redquote.png";

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
        return (
            <div id='Testimonials' style={{backgroundColor: 'white', opacity: 0.9, borderStyle: 'solid', borderWidth: 2, borderColor: '#63FF4A', paddingBottom: 75}}>
                <Container className="text-center" style={{width: "100%"}}>
                    <div className="row justify-content-center">
                        <div style={{textAlign: 'center', fontFamily: 'Arial Rounded MT Bold', fontSize: 20, letterSpacing: 8, paddingTop: 50, paddingBottom: 50}}>
                            WHAT DO PEOPLE THINK?
                        </div>
                    </div>
                    {this.state.testimonials.length
                    ?
                        <CardDeck>
                        {this.state.testimonials.map((item, index) => { return (

                                    <Card key={index} border="success" style={{ width: '18rem' }}>
                                        <Card.Body className='d-flex flex-column'>
                                            <Card.Img variant="bottom" src={RedQuote} style={{height:'30px', width:'30px'}}/>
                                            <p></p>
                                            <Card.Text style={{fontStyle:'italic', fontWeight:'400'}}>
                                                {item.content}
                                            </Card.Text>
                                            <Card.Text className='mt-auto' style={{fontWeight:'bold'}}>
                                                {'-'}{item.name}{' '}({item.credentials})
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>

                        )})}
                        </CardDeck>  
                    :
                        <div style={{textAlign: 'center', padding: 5, fontFamily: 'Arial', fontStyle: 'italic', color: '#404040'}}>No testimnoials currently available.</div>
                    }
                </Container>
            </div>
        )
    }
}
 
export default Testimonials;