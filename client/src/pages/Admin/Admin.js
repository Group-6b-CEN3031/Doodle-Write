import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import axios from 'axios';
import {Nav} from 'react-bootstrap';

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated: false
        }
    }

    componentWillMount () {
        const input = prompt('Please input the password to view this page:')
        if (input === axios.get('/admin/pw').data) {
            this.setState({authenticated: true})
        }
        else {
            this.setState({authenticated: false})
        }
    }

    render() {
        return (
            <React.Fragment>
                <Header tab='Admin'/>
                {!this.state.authenticated
                ?
                    <Nav.Link href='/shop'/>
                :
                    <div>Authenticated!</div>
                }
                <Footer/>
            </React.Fragment>
        )
    }
}

export default Admin;