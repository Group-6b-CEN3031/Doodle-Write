import React from "react";
import {connect} from 'react-redux';
import Sidebar from "react-sidebar";

class Cart extends React.Component {
  render() {
    let list = new Array(25).fill(0)
    return (    
        <Sidebar
            open={this.props.isCartOpen}
            pullRight={true}
            styles={sideBarStyle}
            sidebar= {                          
              <div class="container">
                <div style={{height: 65}}/>
                <div style={sideBarStyle.title}>My Cart</div>
                {this.props.cartItems.length
                ?
                  <div>
                    {this.props.cartItems.map((item, cartItemsIndex) => {
                      return( 
                        <div class="row justify-content-between" style={sideBarStyle.item}>
                          <div class="col">
                            <div class="row">
                              <button class="btn btn-primary" onClick={() => this.props.removeItem(cartItemsIndex)}>X</button>
                              <div>
                                <div class="row" style={{marginLeft: 15}}>{item.name}</div>
                                <div class="row" style={{marginLeft: 15}}>{"Qty: " + item.quantity}</div>
                              </div>
                            </div>
                          </div>
                          <select class="col form-control form-control-sm" style={{alignSelf: "center"}}>
                            {list.map((item, qnty) => {
                              return(
                                <option>{qnty + 1}</option>
                              )
                            })}
                          </select>
                          <div class="col" style={{alignSelf: "center"}}>
                            <t style={{fontSize: 15}}>${item.price}</t>
                          </div>
                        </div>
                      )})}
                    <p style={sideBarStyle.total}>Total ({this.props.cartItems.length} Items): ${this.props.totalCost}</p>
                    <p style={sideBarStyle.button}> 
                      <button class="btn btn-primary">Checkout</button>
                    </p>
                    <div style={{height: 65}}/>
                  </div>
                :
                  <div style={{textAlign: "center", padding: 15}}>Your shopping cart is empty</div>
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
      changeQuantity: (cartItemsIndex, qnty) => dispatch({type: 'CHANGE_QUANTITY', cartItemsIndex, qnty})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)

const sideBarStyle = {
  sidebar: {
    background: "white",
    width: 300,
    position: "fixed"
  },
  title: {
    textAlign: "center",
    fontSize: 25,
    padding: 10,
    borderBottom:  "2px solid #E1E8EE",
  },
  item: {
    textAlign: "right",
    fontSize: 13,
    padding: 15,
    borderBottom:  "2px solid #E1E8EE"
  },
  total: {
    textAlign: "center",
    marginTop: 10
  },
  button: {
    textAlign: "center", 
    fontSize: "20px"
  }
}

