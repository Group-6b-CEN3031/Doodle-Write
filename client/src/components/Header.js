import React from 'react';
import {connect} from 'react-redux';
import {Navbar, Nav, Button, Badge} from 'react-bootstrap';

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
                    <Navbar.Brand href='/'>Doodle Write</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='mr-auto'>
                            <Nav.Link className={(this.props.tab === 'Home' ? 'active' : '')} href='/'>Home</Nav.Link>
                            <Nav.Link className={(this.props.tab === 'Testimonials' ? 'active' : '')} href='/testimonials'>Testimonials</Nav.Link>
                            <Nav.Link className={(this.props.tab === 'Contact Us' ? 'active' : '')} href='/contact-us'>Contact Us</Nav.Link>
                            <Nav.Link className={(this.props.tab === 'Shop' ? 'active' : '')} href='/shop'>Shop</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Button onClick={() => this.setState({...this.state, isCartOpen: !this.state.isCartOpen})}>
                        Cart <Badge variant='light'>{this.props.cartItems.length}</Badge>
                    </Button>
                </Navbar>
                <Cart isCartOpen={this.state.isCartOpen}/>
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
  
  function mapDispatchToProps(dispatch){
    return{

    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Header)