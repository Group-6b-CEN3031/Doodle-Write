import React from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';

import Header from '../../components/Header';
import Footer from '../../components/Footer';


class Admin extends React.Component {
    authenticate () {
        console.log (process.env.EMAIL_PW)
        console.log (process.env.EMAIL_PW.toString())
        const input = prompt('Please input the password to view this page:')
        if (input === process.env.EMAIL_PW.toString()) {
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
                    this.authenticate()
                }
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