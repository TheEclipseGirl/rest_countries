import { combineReducers } from "redux";
import { 
    ADD_COUNTRIES,TOGGLE_MODE
 } from '../actions';

const initialCountriesState = {
    data: []
}

const initialModeState = {
    mode : "light"
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

 export const mode =(state = initialModeState , action) =>{
    switch(action.type){
        case TOGGLE_MODE:
            return{
                mode: action.mode
            }
        default: return state;
    }
}

const rootReducer = combineReducers({
    countries,
    mode
});
export default  rootReducer;