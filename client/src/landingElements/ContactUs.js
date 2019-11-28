import React from "react";
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';

class ContactUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            body: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }

    beforeSendEmail = async () => {
        await axios.post('/mail', {
            name: this.state.name,
            email: this.state.email,
            subject: this.state.subject,
            body: this.state.body
        })
    }

    afterSendEmail = () => {
        this.setState({
            name: '',
            email: '',
            subject: '',
            body: ''
        })
        alert('Message submitted. Thank you!')
    }

    sendEmail = () => {
        this.beforeSendEmail()
        this.afterSendEmail()
    }

    render() {
        return (
            <div id='Contact Us' style={{backgroundColor: 'white', opacity: 0.9, borderStyle: 'solid', borderWidth: 2, borderColor: '#FF3030'}}>
                
                <Form style={{paddingTop: 30, paddingBottom: 30, paddingLeft: 400, paddingRight: 400}}>
                    <div style={{paddingBottom: 10, textAlign: 'center', fontWeight:'600', fontSize:'large'}}>If you have a general question, please fill out this form and send us a message!</div>
                    <Form.Group controlId="formGroupName" style={{width: '48%', marginRight:'4%', display:"inline-block"}}>
                        <Form.Control  type="text" placeholder="Name" name='name' value={this.state.name} onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail" style={{width: '48%',display:"inline-block"}}>
                        <Form.Control  type="email" placeholder="Email" name='email' value={this.state.email} onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="formGroupSubject" style={{width: '100%'}}>
                        <Form.Control  type="text" placeholder="Subject" name='subject' value={this.state.subject} onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="formGroupBody" >
                        <Form.Control style={{minHeight:'250px'}} as="textarea" rows='8' placeholder="Message" name='body' value={this.state.body} onChange={this.handleChange}/>
                    </Form.Group>
                    <div style={{textAlign: 'right'}}>
                        <Button onClick={() => this.sendEmail()} style={{width:'20%'}}>Send</Button>
                    </div>
                </Form>
            </div>
        )
    }
}


export default ContactUs;