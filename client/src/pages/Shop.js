import React from "react";
import {connect} from 'react-redux';
import {Row, Col, Card, Button} from 'react-bootstrap';
import api from "../api";

import Header from "./../components/Header";
import Footer from "./../components/Footer";



class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        }
    }

    componentDidMount = async () => {
        await api.displayAll().then (items => {
            this.setState ({
                items: items.data.data,
            })
        })
    }

    render() { 
        const {items} = this.state
        return (
            <React.Fragment>
                <Header tab="Shop"/>
                {this.state.items.length
                ?
                    <Row className="justify-content-around" style={{marginLeft: 10}}>
                        {items.map((item, index) => {
                            return(
                                <Col xs={12} md={3} style={{paddingTop: 150}}>
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
                :
                    <div style={{textAlign: "center", marginTop: 40}}>The shop is currently empty. Please check again later.</div>
                }
                <div style={{height: 200}}/>
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
        loadShopFromDB: (data) => dispatch({type: "LOAD_SHOP_FROM_DB", data}),
        addToCart: (shopItemIndex) => dispatch({type: 'ADD_TO_CART', shopItemIndex}),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Shop)
