import React from 'react';

import Header from './../components/Header';
import Footer from './../components/Footer';

class Media extends React.Component {
    render() { 
        return (
            <React.Fragment>
                <Header tab='Media'/>
                <div style={{height: 55}}/>
                Media
                <Footer/>
            </React.Fragment>
        )
    }
}
 
export default Media;