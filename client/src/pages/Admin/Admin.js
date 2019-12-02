import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';

class Admin extends React.Component {
    authenticate () {
        if (prompt('Please input the password to view this page:') === process.env.EMAIL_PW.toString()) {
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
                { this.authenticate() }
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