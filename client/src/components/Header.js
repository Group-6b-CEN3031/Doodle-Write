import React from 'react';

import Cart from './Cart';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isCartOpen: false
        }
    }
    toggleCartVisibility = () => {
        this.setState({
            ...this.state,
            isCartOpen: !this.state.isCartOpen
        })
    }

    render() {
        return (
            <React.Fragment>
                <nav class="navbar sticky-top navbar-expand-lg navbar-light shadow bg-white rounded" style={{backgroundColor: '#ffffff'}}>
                    <text class="navbar-brand">Scoot n' Doodle</text>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class={"nav-item " + (this.props.tab === "Home" ? "active" : "")}>
                                <a class="nav-link" href="/">Home</a>
                            </li>
                            <li class={"nav-item " + (this.props.tab === "Testimonials" ? "active" : "")}>
                                <a class="nav-link" href="/testimonials">Testimonials</a>
                            </li>
                            <li class={"nav-item " + (this.props.tab === "Contact Us" ? "active" : "")}>
                                <a class="nav-link" href="/contact-us">Contact Us</a>
                            </li>
                            <li class={"nav-item " + (this.props.tab === "Shop" ? "active" : "")}>
                                <a class="nav-link" href="/shop">Shop</a>
                            </li>
                        </ul>
                    </div>
                    <button type="button" class="btn btn-primary" onClick={() => this.setState({...this.state, isCartOpen: !this.state.isCartOpen})}>
                        Cart <span class="badge badge-light">0</span>
                    </button>
                </nav>
                <Cart isCartOpen={this.state.isCartOpen}/>
            </React.Fragment>
        )
    }
}
 
export default Header;