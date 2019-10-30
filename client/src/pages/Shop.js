import React from 'react';

import Header from './../components/Header';
import Footer from './../components/Footer';

class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() { 
        return (
            <React.Fragment>
                <Header tab='Shop'/>
                Shop
                <Footer/>
            </React.Fragment>
        )
    }
}
 
export default Shop;