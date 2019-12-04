import React from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Axios from 'axios';

import {Button, Form} from 'react-bootstrap';

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pw: 'DWreadlearn!'
        }
    }
    authenticate () {
        var pw = Axios.post('/admin/pw', (req, res) => {
            req.send(this.state.pw).status(200)
        })
        
        if (pw.data) {
            alert('Authenticated!')
            this.props.adminAuthenticated(true)
        }
        else {
            alert('Invalid password.')
            alert(pw.data + ' auth value')
            alert(this.state.pw + ' input')
            this.props.history.push('/admin')
        }
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }
/*
    componentWillMount = async () => {
        const input = prompt('Please input the password to view this page:')
        var pw = await Axios.get('/admin/pw', (req, res) => {
            req.send(input).status(200)
        })
        if (pw.data) {
            alert('Authenticated!')
            this.props.adminAuthenticated(true)
        }
        else {
            alert('Invalid password.')
            this.props.history.push('/')
        }
    }
*/

    render() {
        return (
            <React.Fragment>
                <Header tab='Admin'/>
                {this.props.adminAuth ?
                    <React.Fragment>Authenticated!</React.Fragment>
                :
                    <div style={{justifyContent: 'center', alignItems: 'center', textAlign: 'center', minHeight: window.innerHeight - 120, }}>
                        <div id='Admin' style={{backgroundColor: 'white', opacity: 0.9}}>
                            <Form style={{paddingTop: 30, paddingBottom: 30, paddingLeft: '30%', paddingRight: '30%'}}>
                                <div style={{paddingBottom: 10, textAlign: 'center', fontFamily: 'Arial Rounded MT Bold'}}>Enter password:</div>
                                <Form.Group controlId="formGroupPassword">
                                    <Form.Control  type='text' placeholder="Password" name='password' value={this.state.pw} onChange={this.handleChange}/>
                                </Form.Group>
                                <div style={{textAlign: 'right'}}>
                                    <Button onClick={() => this.authenticate()} style={{width:'20%'}}>Submit</Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                }
                <Footer/>
            </React.Fragment>
        )}
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