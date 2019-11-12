import React, {Component} from 'react';
import {
    Card, CardImg, CardText, 
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

class CartItemCard extends Component{
    constructor(props) {
        super(props);
   
      }
      render () {
       let { id, name, company, description, count } = this.props.individualItem;

        return (
          <div>
            <Card>
              <CardImg top width="100%" src="https://imageog.flaticon.com/icons/png/512/102/102661.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" alt="Card image cap" />
            
                <CardTitle>Item Name:{name}</CardTitle>
                <CardSubtitle>Company Name: {company}</CardSubtitle>
                <CardText>Description:{description}</CardText>
        <CardText>Item Count: {count}</CardText>
                
                <Button color="danger"onClick={() => this.props.removeItem(id)}>Delete</Button>
                <Button color="green"onClick={() => this.props.AddItem(id)}>Add Another</Button>
             
            </Card>
          </div>
        )
      }
}
export default CartItemCard;