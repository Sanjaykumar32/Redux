 import {ADD_ITEM} from '../actionTypes'

export const cartReducer = (state = [], action)=>{
    switch(action.type){
        case ADD_ITEM:
            return [...state, {...action.payload}]
        default:
           return state
    }
}

