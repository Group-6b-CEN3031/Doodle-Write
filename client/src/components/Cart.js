import React from 'react';
import {connect} from 'react-redux';
import {Container, Row, Col, Button} from 'react-bootstrap';
import Sidebar from 'react-sidebar';

class Cart extends React.Component {
  render() {
    let list = new Array(25).fill(0)
    return (    
        <Sidebar
            open={this.props.isCartOpen}
            pullRight={true}
            styles={sideBarStyle}
            sidebar= {                          
              <Container>
                <div style={{height: 65}}/>
                <div style={sideBarStyle.title}>My Cart</div>
                {this.props.cartItems.length
                ?
                  <div>
                    {this.props.cartItems.map((item, cartItemsIndex) => {
                      return( 
                        <Row style={sideBarStyle.item}>
                          <Col>
                            <Row>
                              <Button class='btn btn-primary' onClick={() => this.props.removeItem(cartItemsIndex)}>X</Button>
                              <div>
                                <Row style={{marginLeft: 15}}>{item.name}</Row>
                                <Row style={{marginLeft: 15}}>{'Qty: ' + item.quantity}</Row>
                              </div>
                            </Row>
                          </Col>
                          <select class='col form-control form-control-sm' style={{alignSelf: 'center'}}>
                            {list.map((item, qnty) => {
                              return(
                                <option>{qnty + 1}</option>
                              )
                            })}
                          </select>
                          <Col style={{alignSelf: 'center'}}>
                            <t style={{fontSize: 15}}>${item.price}</t>
                          </Col>
                        </Row>
                      )})}
                    <div style={sideBarStyle.total}>Total ({this.props.cartItems.length} Item(s)): ${this.props.totalCost}</div>
                    <div style={sideBarStyle.button}> 
                      <Button class='btn btn-primary'>Checkout</Button>
                    </div>
                    <div style={{height: 65}}/>
                  </div>
                :
                  <div style={{textAlign: 'center', padding: 15}}>Your shopping cart is empty</div>
                }
              </Container>
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
      changeQuantity: (cartItemsIndex, qnty) => dispatch({type: 'CHANGE_QUANTITY', cartItemsIndex, qnty})
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
    textAlign: 'right',
    fontSize: 13,
    padding: 15,
    borderBottom:  '2px solid #E1E8EE'
  },
  total: {
    textAlign: 'center',
    marginTop: 10
  },
  button: {
    padding: 10,
    textAlign: 'center', 
    fontSize: '20px'
  }
}

