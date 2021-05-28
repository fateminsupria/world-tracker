import {SEARCH_COUNTRY, FETCH_COUNTRIES,FETCH_COUNTRY, LOADING} from './types'; 
import axios from 'axios'; 
import { APIKey } from '../APIKey';

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
};
export const fetchCountry = id => dispatch => {
  axios
    .get(`https://restcountries.eu/rest/v2/name/?apikey=${APIKey}&i=${id}`)
    .then(response =>
      dispatch({
        type: FETCH_COUNTRY,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

export const setLoading = () => {
  return {
    type: LOADING
  };
};