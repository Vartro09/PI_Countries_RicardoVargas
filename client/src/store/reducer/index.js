import { FETCH_COUNTRIES, SEARCH_COUNTRIES, COUNTRY_DETAILS } from "../actions"

const initialState = {
    countries: [],
    filteredCountries: [],
    backUpCountries: [],
    country: [],
    activities: []
}


export default function reducer(state= initialState, action) {
    switch (action.type) {
        case FETCH_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            }
        case SEARCH_COUNTRIES:
            return{
                ...state,
                filteredCountries: action.payload
            }
        case COUNTRY_DETAILS:
            return {
                ...state,
                country: action.payload
            }
    
        default:
            return state
    }
}