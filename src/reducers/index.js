import { combineReducers } from "redux";
import { 
    ADD_COUNTRIES
 } from '../actions';

const initialCountriesState = {
    data: []
}
export const countries = (state = initialCountriesState, action) => {
    switch(action.type){
        case ADD_COUNTRIES: 
            return {
                ...state,
                data: action.countries
            }
        default: return state;
    }
}

const rootReducer = combineReducers({
    countries
});
export default  rootReducer;