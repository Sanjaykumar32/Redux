import {createStore, combineReducers} from 'redux';
import {counterReducer} from '../reducers/counter'
// import {cartReducer} from '../reducers/cart'


let allReducers = combineReducers({table:counterReducer})



const store = createStore(allReducers)

export default store;