// Action types
export const ADD_COUNTRIES = "ADD_COUNTRIES";

//Action creators
export function addCountries(countries) {
    return {
        type: ADD_COUNTRIES,
        countries: countries
    }
}