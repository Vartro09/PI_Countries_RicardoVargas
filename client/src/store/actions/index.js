import axios from 'axios';
export const FETCH_COUNTRIES = 'FETCH_COUNTRIES';
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES';

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

export function searchCountries(search) {
    return function (dispatch) {
        axios.get(`http://localhost:3001/api/countries?name=`+search)
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