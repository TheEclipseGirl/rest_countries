// Action types
export const ADD_COUNTRIES = "ADD_COUNTRIES";
export const TOGGLE_MODE = "TOGGLE_MODE";

//Action creators
export function addCountries(countries) {
    return {
        type: ADD_COUNTRIES,
        countries: countries
    }
}

export function toggleMode(mode){
    return {
        type: TOGGLE_MODE,
        mode: mode
    }
}