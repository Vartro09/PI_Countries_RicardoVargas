import axios from 'axios';
export const FETCH_COUNTRIES = 'FETCH_COUNTRIES';
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES';
export const COUNTRY_DETAILS = 'COUNTRY_DETAILS';
export const ORDER_A_Z = 'ORDER_A_Z';
export const ORDER_Z_A = 'ORDER_Z_A';
export const ORDER_POPULATION_DOWN = 'ORDER_POPULATION_DOWN';
export const ORDER_POPULATION_UP = 'ORDER_POPULATION_UP';
export const FILTER_BY_CONTINENT = 'FILTER_BY_CONTINENT';
export const POST_ACTIVITY = 'POST_ACTIVITY';

export const FETCH_ACTIVITIES = 'FETCH_ACTIVITIES';
export const SEARCH_ACTIVITIES = 'SEARCH_ACTIVITIES';
export const FILTER_BY_ACTIVITIES = 'FILTER_BY_ACTIVITIES';





export function fetchCountries() {
    return async function (dispatch) {
        try {
            axios.get(`http://localhost:3001/api/countries/`)
            .then( (countries) => {
                dispatch({
                    type: FETCH_COUNTRIES,
                    payload: countries.data
                });
            })
        } catch (error) {
            console.log('Error fetchCountries function' + error);
        }
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

export function postActivity(payload) {
    return async function (dispatch) {
        try {
            axios.post(`http://localhost:3001/api/activities/`, payload)
            .then( (activities) => {
                dispatch({
                    type: POST_ACTIVITY,
                    payload: activities.data
                });
            })
        } catch (error) {
            console.log('Error action postActivity ' + error)
        }
    }
};

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

export function orderAz() {
    return {
        type: ORDER_A_Z
    }
}

export function orderZa() {
    return {
        type: ORDER_Z_A
    }
}

export function orderPopulationDown() {
    return {
        type: ORDER_POPULATION_DOWN
    }
}

export function orderPopulationUp() {
    return {
        type: ORDER_POPULATION_UP
    }
}

export function filterByContinent(payload) {
    return {
        type: FILTER_BY_CONTINENT,
        payload
    }
}

export function filterByActivities(payload) {
    return {
        type: FILTER_BY_ACTIVITIES,
        payload: payload
    }


};





