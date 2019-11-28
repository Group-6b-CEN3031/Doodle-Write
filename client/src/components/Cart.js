import React from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import {Container, Row, Col, Button} from 'react-bootstrap';
import Axios from 'axios';
import Sidebar from 'react-sidebar';
import StripeCheckout from 'react-stripe-checkout';

class Cart extends React.Component {
  handleToken = async (token) => {
    await Axios.post('/shop/checkout', {
      token: token, 
      totalCost: Math.round(this.props.totalCost * 100), 
      items: JSON.stringify(this.props.cartItems.map(item => item.name + ' x ' + item.quantity))
    })
  }
  
  refreshPage = () => {
    this.props.history.push('/')
    this.props.emptyCart()
  }

  checkout = (token) => {
    this.handleToken(token)
    this.refreshPage()
  }

  render() {
    return (    
        <Sidebar
            open={this.props.isCartOpen}
            pullRight={true}
            styles={{sidebar: {position: 'fixed', background: 'white', width: 300} }}
            sidebar= { 
              <div>                    
                <div style={{height: 65}}/>
                <div style={sideBarStyle.title}>My Cart</div>
                {this.props.cartItems.length
                ?
                  <React.Fragment>
                    <Container>
                      {this.props.cartItems.map((item, index) => {
                        return( 
                          <Row style={sideBarStyle.item}>
                            <Col>
                                <Button onClick={() => this.props.removeItem(index)}>X</Button>
                            </Col>
                            <Col style={{textAlign: 'center'}}>
                              <div>{item.name}</div>
                              <Row style={{justifyContent: 'center'}}>
                                <button disabled={item.quantity === 1} onClick={() => this.props.decrementQuantity(index)}>-</button>
                                <button>{item.quantity}</button>
                                <button onClick={() => this.props.incrementQuantity(index)}>+</button>
                              </Row>
                            </Col>
                            <Col style={{fontSize: 15, textAlign: 'end'}}>
                              <span >${item.price}</span>
                            </Col>
                          </Row>
                        )
                      })}
                    </Container>
                    <div style={{textAlign: 'center', fontSize: 10, marginTop: 5}}>Shipping: $4.99</div>
                    <div style={{textAlign: 'center'}}>Total ({this.props.cartItems.length} Item(s)): ${this.props.totalCost}</div>
                    <div style={sideBarStyle.checkoutButton}>
                      <StripeCheckout
                        name='Order Form'
                        amount={Math.round(this.props.totalCost * 100)}
                        currency='USD'
                        stripeKey='pk_test_GRBeSKSft03lpoYFBrCIDoEX00ZNrPirhG'
                        shippingAddress
                        billingAddress
                        token={this.checkout}
                        opened={this.onOpened}
                        closed={this.onClosed}
                      >
                        <Button>Checkout</Button>
                      </StripeCheckout>
                    </div>  
                    <div style={{height: 65}}/>
                  </React.Fragment>
                :
                  <div style={{textAlign: 'center', padding: 15}}>Your shopping cart is empty</div>
                }
              </div>     
            }
        />
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
      removeItem: (index) => dispatch({type: 'REMOVE_ITEM', index}),
      decrementQuantity: (index) => dispatch({type: 'DECREMENT_QUANTITY', index}),
      incrementQuantity: (index) => dispatch({type: 'INCREMENT_QUANTITY', index}),
      emptyCart: () => dispatch({type: 'EMPTY_CART'})
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart))

const sideBarStyle = {
  sidebar: {
    background: 'white',
    width: 300,
    position: 'fixed'
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    padding: 10,
    borderBottom:  '2px solid #E1E8EE',
  },
  item: {
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 13,
    borderBottom:  '2px solid #E1E8EE',
  },
  checkoutButton: {
    padding: 10,
    textAlign: 'center', 
    fontSize: '20px'
  }
}

