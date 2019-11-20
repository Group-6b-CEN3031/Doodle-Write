import React from 'react';
import {connect} from 'react-redux';
import {Container, Row, Col, Button} from 'react-bootstrap';
import Sidebar from 'react-sidebar';

class Cart extends React.Component {
  render() {
    return (    
        <Sidebar
            open={this.props.isCartOpen}
            pullRight={true}
            styles={sideBarStyle}
            sidebar= { 
              <React.Fragment>                    
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
                    <div style={sideBarStyle.total}>Total ({this.props.cartItems.length} Item(s)): ${this.props.totalCost}</div>
                    <div style={sideBarStyle.checkoutButton}> 
                      <Button>Checkout</Button>
                    </div>
                    <div style={{height: 65}}/>
                  </React.Fragment>
                :
                  <div style={{textAlign: 'center', padding: 15}}>Your shopping cart is empty</div>
                }
              </React.Fragment>     
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
      incrementQuantity: (index) => dispatch({type: 'INCREMENT_QUANTITY', index})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)

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
  total: {
    textAlign: 'center',
    paddingTop: 10
  },
  checkoutButton: {
    padding: 10,
    textAlign: 'center', 
    fontSize: '20px'
  }
}

