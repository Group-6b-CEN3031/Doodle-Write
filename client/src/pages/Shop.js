import React from "react";
import {connect} from 'react-redux';
import {Row, Col, Card, Button} from 'react-bootstrap';

import Header from "./../components/Header";
import Footer from "./../components/Footer";

class Shop extends React.Component {
    render() { 
        return (
            <React.Fragment>
                <Header tab="Shop"/>
                <Row className="justify-content-around" style={{marginLeft: 10}}>
                    {this.props.shopItems.map((item, index) => {
                        return(
                            <Col xs={12} md={3} style={{paddingTop: 100}}>
                                <Card style={{width: "20rem", height: "36rem"}}>
                                    <Card.Body className="d-flex flex-column">
                                        <Card.Img variant="top" src={item.image}/>
                                        <Card.Title>
                                            <Row className="justify-content-between" style={{marginLeft: 1, marginRight: 1, marginTop: 10}}>
                                                <h5>{item.name}</h5>
                                                <i>${item.price}</i>
                                            </Row>
                                        </Card.Title>
                                        <Card.Text>{item.description}</Card.Text>
                                        <Button className="mt-auto" onClick={() => this.props.addToCart(index)}>Add To Cart</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
                <div style={{height: 50}}/>
                <Footer/>
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
        addToCart: (shopItemIndex) => dispatch({type: 'ADD_TO_CART', shopItemIndex}),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Shop)
