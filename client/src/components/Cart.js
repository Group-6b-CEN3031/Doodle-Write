import React from "react";
import Sidebar from "react-sidebar";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: fakeDB,
      total: 0
    }
  }

  componentWillMount(){
    let newTotal = 0
    this.state.items.forEach(item => {
      newTotal += item.price
    })

    this.setState({
      ...this.state,
      total: newTotal
    })
  }

  removeItem = (index) => {
    let newItems= this.state.items.filter((directory, indx) => indx !== index)

    let newTotal = 0
    newItems.forEach(item => {
      newTotal += item.price
    })

    this.setState({
      ...this.state,
      items: newItems,
      total: newTotal
    })
  }

  render() {    
    return (    
        <Sidebar
            open={this.props.isCartOpen}
            pullRight={true}
            styles={sideBarStyle}
            sidebar= {                          
              <div class="container">
                <div style={{height: 65}}/>
                <div style={sideBarStyle.title}>My Cart</div>
                {this.state.items.length
                ?
                  <div>
                    {this.state.items.map((item, index) => {
                      return( 
                        <div class="row justify-content-between" style={sideBarStyle.item}>
                          <div class="col">
                            <div class="row">
                              <button class="btn btn-primary" onClick={() => this.removeItem(index)}>X</button>
                              <div style={{marginLeft: 15}}>
                                <div>{item.name}</div>
                                <div>Qty: 1</div>
                              </div>
                            </div>
                          </div>
                          <div class="col" style={{alignSelf: "center"}}>
                            <t style={{fontSize: 15}}>${item.price}</t>
                          </div>
                        </div>
                      )})}
                    <p style={sideBarStyle.total}>Total ({fakeDB.length} Items): ${this.state.total}</p>
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

export default Cart;

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

const fakeDB = [
  {
    image: ".../100px180/",
    name: "Grip 0",
    price: 0,
    description: "Grip 0: Some quick example text to build on the card title and make up the bulk of the card's content"
  },
  {
    image: ".../100px180/",
    name: "Grip 1",
    price: 10,
    description: "Grip 1: Some quick example text to build on the card title and make up the bulk of the card's content"
  },
  {
    image: ".../100px180/",
    name: "Grip 2",
    price: 20,
    description: "Grip 2: Some quick example text to build on the card title and make up the bulk of the card's content"
  },
  {
    image: ".../100px180/",
    name: "Grip 3",
    price: 30,
    description: "Grip 3: Some quick example text to build on the card title and make up the bulk of the card's content"
  },
  {
    image: ".../100px180/",
    name: "Grip 4",
    price: 40,
    description: "Grip 4: Some quick example text to build on the card title and make up the bulk of the card's content"
  },
  {
    image: ".../100px180/",
    name: "Grip 5",
    price: 50,
    description: "Grip 5: Some quick example text to build on the card title and make up the bulk of the card's content"
  }
]