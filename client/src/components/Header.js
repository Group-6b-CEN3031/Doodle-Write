import React from 'react';
import {connect} from 'react-redux';
import {Navbar, Nav, Button, Badge} from 'react-bootstrap';
import Scroll from 'react-scroll';

import Cart from './Cart';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isCartOpen: false
        }
    }

    render() {
        return (
            <React.Fragment>
                <Navbar bg='light' expand='lg' fixed='top' className='shadow bg-white rounded'>
                    <Navbar.Brand href='/'>Doodlewrite</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                    {window.location.pathname === '/'
                    ?
                        <Nav className='mr-auto'>
                            <Scroll.Link to='Home' smooth={true} offset={-250}><Nav.Link>Home</Nav.Link></Scroll.Link>
                            <Scroll.Link to='Media' smooth={true} offset={-150}><Nav.Link >Media</Nav.Link></Scroll.Link>
                            <Scroll.Link to='Testimonials' smooth={true} offset={-175}><Nav.Link >Testimonials</Nav.Link></Scroll.Link>
                            <Scroll.Link to='Contact Us' smooth={true} offset={-100}><Nav.Link>Contact Us</Nav.Link></Scroll.Link>
                            <Nav.Link className={(this.props.tab === 'Shop' ? 'active' : '')} href='/shop'>Shop</Nav.Link>
                        </Nav>
                    :
                        <Nav className='mr-auto'>
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link className={(this.props.tab === 'Shop' ? 'active' : '')} href='/shop'>Shop</Nav.Link>
                        </Nav>    
                    }
                    </Navbar.Collapse>
                    <Button onClick={() => this.setState({...this.state, isCartOpen: !this.state.isCartOpen})}>
                        Cart <Badge variant='light'>{this.props.cartItems.length}</Badge>
                    </Button>
                </Navbar>
                <Cart isCartOpen={this.state.isCartOpen}/>
                <div style={{height: 55}}/>
            </React.Fragment>
        )
    }
}
 
function mapStateToProps(state){
    return{
      shopItems: state.shopItems,
      cartItems: state.cartItems,
      totalCost: state.totalCost
    }
}

export default connect(mapStateToProps)(Header)