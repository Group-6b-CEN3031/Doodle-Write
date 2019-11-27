import {createStore} from 'redux';
import {loadState, saveState} from './sessionStorage.js';

const persistedState = loadState();

const initialState = {
    cartItems: [],
    totalCost: 0
}

const reducer = (state = initialState, action) => {

    let generateNewTotal = (cart) => {
        let newTotal = 0
        cart.forEach(item => {
            newTotal += item.price * item.quantity
        })
        return (newTotal + 4.99).toFixed(2);
    }

    switch(action.type){
        case 'ADD_TO_CART':{
            if(state.cartItems.some(item => item.name === action.item.name)){
                alert('This item is already in your shopping cart')
                return{
                    ...state
                }
            }
            else{
                let temp = state.cartItems
                temp.push({
                    name: action.item.name,
                    price: action.item.price,
                    quantity: 1
                })
                return{
                    ...state,
                    cartItems: temp,
                    totalCost: generateNewTotal(temp)
                }
            }
        }
        case 'REMOVE_ITEM':{
            let temp = state.cartItems.filter((item, index) => index !== action.index)
            return{
                ...state,
                cartItems: temp,
                totalCost: generateNewTotal(temp)
            }
        }
        case 'DECREMENT_QUANTITY':{
            let temp = state.cartItems
            temp[action.index].quantity -= 1
            return{
                ...state,
                cartItems: temp,
                totalCost: generateNewTotal(temp)
            }
        }
        case 'INCREMENT_QUANTITY':{
            let temp = state.cartItems
            temp[action.index].quantity += 1
            return{
                ...state,
                cartItems: temp,
                totalCost: generateNewTotal(temp)
            }
        }
        case 'EMPTY_CART':{
            return initialState
        }
        default:
            return state
    }
}
const store =  createStore(reducer, persistedState);

store.subscribe(() => {saveState(store.getState())})

export default store