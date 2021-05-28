import {combineReducers} from 'redux'; 
import searchReducer from './searchReducer';

export default combineReducers({
    countries: searchReducer 

}); 