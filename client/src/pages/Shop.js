import React from "react";

import Header from "./../components/Header";
import Footer from "./../components/Footer";

import shopitems from "./../assets/shop.json";

class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        var shop = JSON.parse(shopitems)
    }
    render() {
        return (
            <React.Fragment>
                <Header tab="Shop"/>
                Shop
                { shop.items[0].name }
                <Footer/>
            </React.Fragment>
        )
    }
}
 
export default Shop;