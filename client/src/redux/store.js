import {createStore} from 'redux';

const initialState = {
    shopItems: [],
    cartItems: [],
    totalCost: 0
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "LOAD_SHOP_FROM_DB":
            if(state.shopItems.length){
                return{
                    ...state
                }
            }
            else{
                return{
                    ...state,
                    shopItems: action.shopData
                }
            }
        case "ADD_TO_CART":
            if(state.cartItems.some(item => item.name === action.item.name)){
                alert("This item is already in your shopping cart")
                return{
                    ...state
                }
            }
            else{
                let temp1 = state.cartItems
                temp1.push({
                    name: action.item.name,
                    price: action.item.price,
                    quantity: 1
                })

                let newTotal1 = 0
                temp1.forEach(item => {
                    newTotal1 += item.price * item.quantity
                })

                return{
                    ...state,
                    cartItems: temp1,
                    totalCost: newTotal1.toFixed(2)
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
                totalCost: newTotal2.toFixed(2)
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