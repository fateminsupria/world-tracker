import {SEARCH_COUNTRY, FETCH_COUNTRIES} from './types'; 
import axios from 'axios'; 

export const searchCountry = text => dispatch => {
    dispatch({
        type: SEARCH_COUNTRY, 
        payload: text
    })
}; 

export const fetchCountries = text => dispatch =>{
    axios.get(`https://restcountries.eu/rest/v2/name/${text}`)
    .then(res =>
        dispatch({
          type: FETCH_COUNTRIES,
          payload: res.data
        })
      )
      .catch(err => console.log(err));
}