import React from 'react';
import {connect} from 'react-redux';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import Axios from 'axios';

import Header from './../components/Header';
import Footer from './../components/Footer';

import Checkout from './Checkout'

class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        }
    }

    componentWillMount() {
        Axios.get('/shop/data')
            .then(response => {
                this.setState({items: response.data})
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() { 
        return (
            <React.Fragment>
                <Header tab='Shop'/>
                <div style={{height: 55}}/>
                <Container style={{width: '100%'}}>
                    {this.state.items.length
                    ?
                        <Row className='justify-content-around'>
                            {this.state.items.map((item, index) => {
                                return(
                                    <Col xs={12} md={4} style={{paddingTop: 75}}>
                                        <Card style={{width: '20rem', height: '36rem'}}>
                                            <Card.Body className='d-flex flex-column'>
                                                <Card.Img variant='top' src={'.../../'} style={{width: 278, height: 300}}/>
                                                <Card.Title>
                                                    <Row className='justify-content-between' style={{marginLeft: 1, marginRight: 1, marginTop: 10}}>
                                                        <h5>{item.name}</h5>
                                                        <i>${item.price}</i>
                                                    </Row>
                                                </Card.Title>
                                                <Card.Text>{item.description}</Card.Text>
                                                <Button className='mt-auto' onClick={() => this.props.addToCart(item)}>Add To Cart</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })}
                        </Row>
                    :
                        <div style={{textAlign: 'center', marginTop: 40}}>The shop is currently unavailable. Please check again later.</div>
                    }
                </Container>
                <div style={{height: 125}}/>
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
        addToCart: (item) => dispatch({type: 'ADD_TO_CART', item}),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Shop)
