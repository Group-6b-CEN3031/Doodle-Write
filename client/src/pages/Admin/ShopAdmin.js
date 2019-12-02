import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import {Button, Form} from 'react-bootstrap';
import axios from 'axios';

import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';

class ShopAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: '',
            name: '',
            price: 0,
            description: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }

    beforeCreate = async () => {
        await axios.post('/admin/shop/create', {
            image: this.state.image === '' ? '.../100px180/' : this.state.image,
            name: this.state.name,
            price: this.state.price,
            description: this.state.description
        })
    }

    beforeUpdateByName = async() => {
        await axios.post('/admin/shop/updatebyname', {
            image: this.state.image == '' ? '.../100px180/' : this.state.image,
            name: this.state.name,
            price: this.state.price,
            description: this.state.description
        })
    }

    beforeUpdateByPrice = async() => {
        await axios.post('/admin/shop/updatebyprice', {
            image: this.state.image == '' ? '.../100px180/' : this.state.image,
            name: this.state.name,
            price: this.state.price,
            description: this.state.description
        })
    }

    beforeDelete = async () => {
        await axios.post('/admin/shop/delete', {
            image: this.state.image,
            name: this.state.name,
            price: this.state.price,
            description: this.state.description
        })
    }

    after = () => {
        this.setState({
            image: '',
            name: '',
            price: 0,
            description: ''
        })
        alert('Completed Request.')
    }

    create = () => {
        this.beforeCreate()
        this.after()
    }

    updateByName = () => {
        this.beforeUpdateByName()
        this.after()
    }

    updateByPrice = () => {
        this.beforeUpdateByPrice()
        this.after()
    }

    delete = () => {
        this.beforeDelete()
        this.after()
    }

    render() { 
        return (
            <React.Fragment>
                <Header tab='Shop Admin'/>
                {this.props.adminAuth ?
                    <div style={{justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
                        <div id='Shop Admin' style={{backgroundColor: 'white', opacity: 0.9}}>
                            <Form style={{paddingTop: 30, paddingBottom: 30, paddingLeft: '30%', paddingRight: '30%'}}>
                                <div style={{paddingBottom: 10, textAlign: 'center', fontFamily: 'Arial Rounded MT Bold'}}>Create or Delete a Shop Item:</div>
                                <Form.Group controlId="formGroupImage" style={{width: '100%'}}>
                                    <Form.Control  type="text" placeholder="Image" name='image' value={this.state.image} onChange={this.handleChange}/>
                                </Form.Group>
                                <Form.Group controlId="formGroupName" style={{width: '100%'}}>
                                    <Form.Control  type="text" placeholder="Name" name='name' value={this.state.name} onChange={this.handleChange}/>
                                </Form.Group>
                                <Form.Group controlId="formGroupPrice" style={{width: '100%'}}>
                                    <Form.Control  type="number" step="0.01" placeholder="Price" name='price' value={this.state.price} onChange={this.handleChange}/>
                                </Form.Group>
                                <Form.Group controlId="formGroupDescription" >
                                    <Form.Control style={{minHeight:'250px'}} as="textarea" rows='8' placeholder="Description" name='description' value={this.state.description} onChange={this.handleChange}/>
                                </Form.Group>
                                <div style={{textAlign: 'center'}}>
                                    <Button onClick={() => this.create()} style={{width:'20%'}}>Create</Button> <Button onClick={() => this.updateByName()} style={{width:'20%'}}>Update By Name</Button> <Button onClick={() => this.updateByPrice()} style={{width:'20%'}}>Update By Price</Button> <Button onClick={() => this.delete()} style={{width:'20%'}}>Delete</Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                :
                    this.props.history.push('/admin')
                }
                <Footer/>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state){
    return{
      adminAuth: state.adminAuth
    }
}

export default withRouter(connect(mapStateToProps)(ShopAdmin));