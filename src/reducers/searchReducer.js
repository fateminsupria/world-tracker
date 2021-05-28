import {SEARCH_COUNTRY,  FETCH_COUNTRIES} from '../actions/types'; 

const initialState = {
    text:"", 
    countries: [], 
    loading: false, 
    country:[]
}

export const searchReducer =(state = initialState,action) => {
    switch(action.type){
        case SEARCH_COUNTRY: 
        return{
            ...state, 
            text: action.payload, 
            loading: false
        }
        case FETCH_COUNTRIES: 
        return{
            ...state, 
            countries: action.payload
        }
        default: 
         return state; 
       
    }
}

export default searchReducer;