import {SEARCH_COUNTRY} from './types'; 

export const searchCountry = text => dispatch => {
    dispatch({
        type: SEARCH_COUNTRY, 
        payload: text
    })
}