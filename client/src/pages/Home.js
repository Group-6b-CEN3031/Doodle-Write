import React from 'react';

import Header from './../components/Header';
import Footer from './../components/Footer';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() { 
        return (
            <React.Fragment style={{justifyContent: 'center'}}>
                <Header tab='Home'/>
                Home
                <Footer/>
            </React.Fragment>
        )
    }
}
 
export default Home;