import React from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Axios from 'axios';
import { Button } from 'react-bootstrap';


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

    authenticate = async () => {
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

    render() {
        return (
            <React.Fragment>
                <Header/>
                <div style={{width: '100%', justifyContent: 'center', alignItems: 'center', textAlign: 'center', minHeight: window.innerHeight - 120, paddingTop: '5%'}}>
                    <input type='password' name='value' Placeholder='Password' onChange={this.handleChange} value={this.state.value} />
                    <div style={{textAlign: 'center'}}> <Button onClick={() => this.authenticate()} style={{width:'10%'}}> Submit </Button> </div>
                </div>
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