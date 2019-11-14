import React from "react";
import Sidebar from "react-sidebar";
import { Container, Row, Col } from 'reactstrap';
import CartItemCard from "./CartItemCard";

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          total: 0
      }
    }


render() {
                
    return (
      
        <Sidebar
            open={this.props.isCartOpen}
            pullRight={true}
            styles={sideBarStyle}
            sidebar= {
                                          
              <div>
                <Container>
                <div style={sideBarStyle.title} {...total =0 }> Cart </div>
                
                {fakeDB.map((item, index) => {
                  
                  {total += fakeDB[index].price}

                    return( 
                      
                      <div style={sideBarStyle.item}>
                        <div style={sideBarStyle.buttons}>
                          <button class="btn btn-primary">X</button>
                        </div>

                        <div> 
                          <b>{item.name}</b>
                          
                          <t style={sideBarStyle.price} > ${item.price}</t>
                            <p style={{fontSize:"15px"}}>Quantity 
                            <span class="badge badge-light">1</span> 
                            <button class="btn" style={{
                                          paddingTop: "0px",
                                          paddingBottom: "0px",
                                          paddingLeft: "0px",
                                          paddingRight: "0px",
                                          marginLeft:"15px"}}>
                                            <b>+</b></button>
                                    
                              </p>
                        </div>
                        
                      </div>
                    )
                
                  })}
                  <p></p>
            <p style={{textAlign: "right"}}>Total ({fakeDB.length} Items): ${total}</p>
            <br></br>
                  <p style={{textAlign: "center", fontSize:"20px"}}> 

                      <button class="btn btn-primary" >Checkout</button>
                  </p>

                 
                  
                
                </Container>
              </div>                       
                                  
            }
        />
  
    )
  }
}
 
export default Cart;

var total = 0;

const fakeDB = [
  {
      image: ".../100px180/",
      name: "Grip 0",
      price: 0,
      description: "Grip 0: Some quick example text to build on the card title and make up the bulk of the card's content",
  },
  {
      image: ".../100px180/",
      name: "Grip 1",
      price: 10,
      description: "Grip 1: Some quick example text to build on the card title and make up the bulk of the card's content",
  },
  {
      image: ".../100px180/",
      name: "Grip 2",
      price: 20,
      description: "Grip 2: Some quick example text to build on the card title and make up the bulk of the card's content",
  },
  {
      image: ".../100px180/",
      name: "Grip 3",
      price: 30,
      description: "Grip 3: Some quick example text to build on the card title and make up the bulk of the card's content",
  },
  {
      image: ".../100px180/",
      name: "Grip 4",
      price: 40,
      description: "Grip 4: Some quick example text to build on the card title and make up the bulk of the card's content",
  },
  {
      image: ".../100px180/",
      name: "Grip 5",
      price: 50,
      description: "Grip 5: Some quick example text to build on the card title and make up the bulk of the card's content",
  },
]

const sideBarStyle = {


  sidebar: {
      background: "white",
      width: 350,
      position: "fixed"
  },

  title: {
      height: "60px",
      borderBottom: "1px solid #E1E8EE",
      marginTop: "60px",
      padding: "20px 30px",
      color: "#5E6977",
      fontSize: "25px",
      fontweight: "400",
      textAlign: "center"
    },

  item: {
    padding: "20px 30px",
    height: "100px",
    display: "flex",
    borderBottom:  "2px solid #E1E8EE"
  },

  price: {
    width: "100px",
    marginLeft: "100px",
    textAlign: "center",
    fontSize: "16px",
    fontWeight: "300",
  },

  buttons: {
    position: "relative",
    paddingTop: "0px",
    marginRight: "30px",
    marginLeft: "-20px",
  },


  
}


