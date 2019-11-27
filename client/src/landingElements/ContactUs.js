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
            <div id='Contact Us' style={{backgroundColor: 'white'}}>
                <div style={{padding: 40, textAlign: 'center'}}>Contact Us</div>
                <Form style={{paddingBottom: 50, paddingLeft: 500, paddingRight: 500}}>
                    <Form.Group controlId="formGroupName" style={{width: '20%'}}>
                        <Form.Control size="sm" type="text" placeholder="Enter name" name='name' value={this.state.name} onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail" style={{width: '20%'}}>
                        <Form.Control size="sm" type="email" placeholder="Enter email" name='email' value={this.state.email} onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="formGroupSubject" style={{width: '20%'}}>
                        <Form.Control size="sm" type="text" placeholder="Enter subject" name='subject' value={this.state.subject} onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="formGroupBody">
                        <Form.Control size="sm" as="textarea" rows='8' placeholder="Enter body" name='body' value={this.state.body} onChange={this.handleChange}/>
                    </Form.Group>
                    <div style={{textAlign: 'center'}}>
                        <Button onClick={() => this.sendEmail()}>Send</Button>
                    </div>
                </Form>
            </div>
        )
    }
}


export default ContactUs;