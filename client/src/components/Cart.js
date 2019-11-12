import React from "react";
import Sidebar from "react-sidebar";
import { Container, Col } from 'reactstrap';
import CartItemCard from "./CartItemCard";

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        cartItem:  [
          {
            id: 1,
            name: "Doddle 3000",
            company: "DoodleWrite",
            description: "Turns 2D into 3D... WITH CHALK",
            count:1
          },
          {
            id: 2,
            name: "ScootDoodlie45",
            company: "DoodleWrite",
            description: "Met at a party. Will connect with later",
            count:1
          },
          {
            id: 3,
            name: "ImprericalDoodler",
            company: "DoodleWrite",
            description: "Met at a party. Will connect with later",
            count :1
          },
          {
            id: 4,
            name: "AutoDoodler",
            company: "DoodleWrite",
            description: "Met at a party. Will connect with later",
            count: 1
          }
        ]
      }
    }
      removeItem(id) {
        this.setState({ cartItem: this.state.cartItem.filter(individualItem => individualItem.id !== id)});
      }
      AddItem(PassedId) {
        this.setState(()=>{
          this.state.cartItem[PassedId -1].count = this.state.cartItem[PassedId -1].count+1;
         });

      }
    render() {
        
        let cartCards =this.state.cartItem.map(individualItem => {
            return (
              <Col >
                <CartItemCard key = {individualItem.id} removeItem={this.removeItem.bind(this)} 
                AddItem={this.AddItem.bind(this)}
                individualItem={individualItem} />
              </Col>
            )
          }) 
          
        return (
          
            <Sidebar
                open={this.props.isCartOpen}
                pullRight={true}
                styles={sideBarStyle}
                sidebar={
                    <>
                        <div style={{marginTop: 60,textAlign: "center"}}>Cart</div>                       
                        <div>
                            <Container>
                         {cartCards}  
                         
                         </Container>
                            </div>                       
                    </>                 
                }
            />
      
        )
    }
}
 
export default Cart;

const sideBarStyle = {
    sidebar: {
        background: "white",
        width: 350,
        position: "fixed"
    },
}