import React from "react";

import Header from "./../components/Header";
import Footer from "./../components/Footer";

import itemDB from "./../assets/items.json";
import api from "../api";

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
        const { items } = this.state
        console.log ('database items?', items)
        return (
            <React.Fragment>
                <Header tab="Shop"/>
                <div class="row justify-content-around" style={{padding: 100}}>
                    {items.map((item, index) => {
                        return(
                            <div class="col-sm-4" style={{marginBottom: 75}}>
                                <div class="card" style={{width: "20rem", height: "36rem"}}>
                                    <img class="card-img-top" src={item.image} alt={"image " + index}/>
                                    <div class="card-body d-flex flex-column">
                                        <div class="row justify-content-between" style={{marginLeft: 1, marginRight: 1}}>
                                            <h5 class="card-title">{item.name}</h5>
                                            <i>{item.price}</i>
                                        </div>
                                        <p class="card-text">{item.description}</p>
                                        <button class="btn btn-primary mt-auto">Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <Footer/>
            </React.Fragment>
        )
    }
}
 
export default Shop;