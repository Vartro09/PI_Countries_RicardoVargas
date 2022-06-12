import axios from 'axios';
export const FETCH_COUNTRIES = 'FETCH_COUNTRIES';
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES';
export const COUNTRY_DETAILS = 'COUNTRY_DETAILS';


export function fetchCountries() {
    return function (dispatch) {
        axios.get(`http://localhost:3001/api/countries/`)
        .then( (countries) => {
            dispatch({
                type: FETCH_COUNTRIES,
                payload: countries.data
            });
        })
        .catch( (error) => {
            console.log(error)
        });
    }
}

export function searchCountries(payload) {
    return function (dispatch) {
        axios.get(`http://localhost:3001/api/countries?name=${payload}`)
        .then( (countries) => {
            dispatch({
                type: SEARCH_COUNTRIES,
                payload: countries.data
            });
        })
        .catch( (error) => {
            console.log(error)
        });
    }
}

export function countryDetails(payload) {
    return function (dispatch) {
        axios.get(`http://localhost:3001/api/countries/${payload}`)
        .then( (countries) => {
            dispatch({
                type: COUNTRY_DETAILS,
                payload: countries.data
            });
        })
        .catch( (error) => {
            console.log(error)
        });
    }
}

