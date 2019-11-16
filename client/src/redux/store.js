import {createStore} from 'redux';

const initialState = {
    shopItems: [
        {
            image: ".../100px180/",
            name: "Grip 0",
            price: 10,
            description: "Grip 0: Some quick example text to build on the card title and make up the bulk of the card's content",
        },
        {
            image: ".../100px180/",
            name: "Grip 1",
            price: 20,
            description: "Grip 1: Some quick example text to build on the card title and make up the bulk of the card's content",
        },
        {
            image: ".../100px180/",
            name: "Grip 2",
            price: 30,
            description: "Grip 2: Some quick example text to build on the card title and make up the bulk of the card's content",
        },
    ],
    cartItems: [],
    totalCost: 0
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_TO_CART":
            if(state.cartItems.some(item => item.name === state.shopItems[action.shopItemIndex].name)){
                alert("This item is already in your shopping cart")
                return{
                    ...state
                }
            }
            else{
                let temp1 = state.cartItems
                temp1.push({
                    name: state.shopItems[action.shopItemIndex].name,
                    price: state.shopItems[action.shopItemIndex].price,
                    quantity: 1
                })

                let newTotal1 = 0
                temp1.forEach(item => {
                    newTotal1 += item.price * item.quantity
                })

                return{
                    ...state,
                    cartItems: temp1,
                    totalCost: newTotal1
                }
            }
        case "REMOVE_ITEM":
            let temp2 = state.cartItems.filter((item, index) => index !== action.index)

            let newTotal2 = 0
            temp2.forEach(item => {
                newTotal2 += item.price * item.quantity
            })

            return{
                ...state,
                cartItems: temp2,
                totalCost: newTotal2
            }
        case "CHANGE_QUANTITY":
            let temp3 = state.cartItems
            temp3.map((item, index) => index === action.cartItemsIndex ? item.quantity: action.qnty)
            return{
                ...state,
                cartItems: temp3
            }
        default:
            return state
    }
}

export default createStore(reducer, initialState);