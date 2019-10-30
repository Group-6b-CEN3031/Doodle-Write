import React from 'react';

import Header from './../components/Header';
import Footer from './../components/Footer';

class ContactUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() { 
        return (
            <React.Fragment>
                <Header tab='Contact Us'/>
                Contact Us
                <Footer/>
            </React.Fragment>
        )
    }
}
 
export default ContactUs;