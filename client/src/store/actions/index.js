import axios from 'axios';
export const FETCH_COUNTRIES = 'FETCH_COUNTRIES';
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES';
export const COUNTRY_DETAILS = 'COUNTRY_DETAILS';
export const FETCH_ACTIVITIES = 'FETCH_ACTIVITIES';
export const SEARCH_ACTIVITIES = 'SEARCH_ACTIVITIES';


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

export function getActivities() {
    return function (dispatch) {
        axios.get(`http://localhost:3001/api/activities/`)
        .then( (activities) => {
            dispatch({
                type: FETCH_ACTIVITIES,
                payload: activities.data
            });
        })
        .catch( (error) => {
            console.log(error)
        });
    }
}

export function searchActivities(payload) {
    return {
        type: SEARCH_ACTIVITIES,
        payload
    }
}

