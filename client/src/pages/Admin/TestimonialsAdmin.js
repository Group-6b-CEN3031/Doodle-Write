import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import {Button, Form} from 'react-bootstrap';
import axios from 'axios';

import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';

class TestimonialsAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            name: '',
            credentials: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }

    beforeCreate = async () => {
        await axios.post('/admin/testimonials/create', {
            content: this.state.content,
            name: this.state.name,
            credentials: this.state.credentials
        })
    }

    beforeUpdateByName = async () => {
        await axios.post('/admin/testimonials/updatebyname', {
            content: this.state.content,
            name: this.state.name,
            credentials: this.state.credentials
        })
    }

    beforeUpdateByCredentials = async () => {
        await axios.post('/admin/testimonials/updatebycredentials', {
            content: this.state.content,
            name: this.state.name,
            credentials: this.state.credentials
        })
    }

    beforeDelete = async () => {
        await axios.post('/admin/testimonials/delete', {
            name: this.state.name
        })
    }

    after = () => {
        this.setState({
            content: '',
            name: '',
            credentials: ''
        })
        alert('Completed Request.')
    }

    create = () => {
        this.beforeCreate()
        this.after()
    }

    updateByName = () => {
        this.beforeUpdateByName()
        this.after()
    }

    updateByCredentials = () => {
        this.beforeUpdateByCredentials()
        this.after()
    }

    delete = () => {
        this.beforeDelete()
        this.after()
    }

    render() {
        return (
            <React.Fragment>
                <Header tab='Testimonials Admin'/>
                {this.props.adminAuth ?
                    <div style={{justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
                        <div id='Testimonials Admin' style={{backgroundColor: 'white', opacity: 0.9}}>
                            <Form style={{paddingTop: 30, paddingBottom: 30, paddingLeft: '30%', paddingRight: '30%'}}>
                                <div style={{paddingBottom: 10, textAlign: 'center', fontFamily: 'Arial Rounded MT Bold'}}>Create or Delete a Testimonial:</div>
                                <Form.Group controlId="formGroupContent" >
                                    <Form.Control style={{minHeight:'250px'}} as="textarea" rows='8' placeholder="Testimonial" name='content' value={this.state.content} onChange={this.handleChange}/>
                                </Form.Group>
                                <Form.Group controlId="formGroupName" style={{width: '100%'}}>
                                    <Form.Control  type="text" placeholder="Name" name='name' value={this.state.name} onChange={this.handleChange}/>
                                </Form.Group>
                                <Form.Group controlId="formGroupCredentials" style={{width: '100%'}}>
                                    <Form.Control  type="text" placeholder="Credentials" name='credentials' value={this.state.credentials} onChange={this.handleChange}/>
                                </Form.Group>
                                <div style={{textAlign: 'center'}}>
                                    <Button onClick={() => this.create()} style={{width:'20%'}}>Create</Button> <Button onClick={() => this.updateByName()} style={{width:'20%'}}>Update By Name</Button> <Button onClick={() => this.updateByCredentials()} style={{width:'25%'}}>Update By Credentials</Button> <Button onClick={() => this.delete()} style={{width:'20%'}}>Delete</Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                :
                    this.props.history.push('/admin')
                }
                <Footer/>
            </React.Fragment>
        )
    }
}
 
function mapStateToProps(state) {
    return {
        adminAuth: state.adminAuth
    }
}

export default withRouter(connect(mapStateToProps)(TestimonialsAdmin));