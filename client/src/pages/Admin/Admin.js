import React from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Axios from 'axios';
import { Button, Form } from 'react-bootstrap';


class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }
/*
    authenticate () {
        const input = prompt('Please input the password to view this page:')
        if (input === process.env.EMAIL_PW) {
            alert('Authenticated!')
            this.props.adminAuthenticated(true)
        }
        else {
            alert('Invalid password.')
            this.props.history.push('/')
        }
    }
*/

    handleChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }

    beforeAuthenticate = async () => {
        var pw = await Axios.get('/admin/pw')
        if (this.state.password === pw.data) {
            alert('Authenticated!')
            this.props.adminAuthenticated(true)
        }
        else {
            alert('Invalid password.')
            this.props.history.push('/')
        }
    }

    afterAuthenticate = () => {
            this.setState({
                value: ''
            })
        }

    authenticate = () => {
        this.beforeAuthenticate();
        this.afterAuthenticate();
    }

    render() {
        return (
            <React.Fragment>
                <Header/>
                <Form style={{paddingTop: 30, paddingBottom: 30, paddingLeft: '30%', paddingRight: '30%'}}>
                    <div style={{paddingBottom: 10, textAlign: 'center', fontFamily: 'Arial Rounded MT Bold'}}>Enter Password:</div>
                    <Form.Group controlId="formGroupValue" style={{width: '48%', marginRight:'4%', display:"inline-block"}}>
                        <input type='password' name='value' Placeholder='Password' onChange={this.handleChange} value={this.state.value} />
                    </Form.Group>
                    <div style={{textAlign: 'center'}}> <Button onClick={() => this.authenticate()} style={{width:'10%'}}> Submit </Button> </div>
                </Form>
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
  
function mapDispatchToProps(dispatch) {
    return {
        adminAuthenticated: (value) => dispatch({type: 'ADMIN_AUTHENTICATED', value})
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Admin));