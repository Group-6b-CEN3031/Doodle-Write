import React from "react";

import Header from "./../components/Header";
import Footer from "./../components/Footer";

class Testimonials extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() { 
        return (
            <React.Fragment>
                <Header tab="Testimonials"/>
                Testimonials
                <Footer/>
            </React.Fragment>
        )
    }
}
 
export default Testimonials;