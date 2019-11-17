import {createStore} from 'redux';

const initialState = {
    shopItems: [],
    cartItems: [],
    totalCost: 0
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "LOAD_SHOP_FROM_DB":
            return{
                ...state,
                shopItems: action.data
            }
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