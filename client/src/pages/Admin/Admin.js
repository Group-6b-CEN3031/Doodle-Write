import React from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Axios from 'axios';


class Admin extends React.Component {
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
    componentWillMount = async () => {
        const input = prompt('Please input the password to view this page:')
        var pw = await Axios.get('/admin/pw')
        if (input === pw.data) {
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
                <Header tab='Admin'/>
                {this.props.adminAuth
                ?
                    ''
                :
                    ''//this.authenticate()
                
                }
                {console.log(this.props.adminAuth)}
                <div style={{minHeight: window.innerHeight - 120}}/>
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