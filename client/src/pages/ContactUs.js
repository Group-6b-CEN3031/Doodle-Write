import React from 'react';

import Header from './../components/Header';
import Footer from './../components/Footer';

class ContactUs extends React.Component {
    render() { 
        return (
            <React.Fragment>
                <Header tab='Contact Us'/>
                <div style={{height: 55}}/>
                Contact Us
                <Footer/>
            </React.Fragment>
        )
    }
}
 
export default ContactUs;