import {SEARCH_COUNTRY} from '../actions/types'; 

const initialState = {
    text:"", 
    countries: [], 
    loading: false, 
    country:[]
}

export default function(state = initialState,action) {
    switch(action.type){
        case SEARCH_COUNTRY: 
        return{
            ...state, 
            text: action.payload, 
            loading: false
        }
        default: {
            return state;
        }
       
    }
}