import { FETCH_COUNTRIES, SEARCH_COUNTRIES } from "../actions"

const initialState = {
    countries: [],
    filteredCountries: []
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
                countries: action.payload
            }
    
        default:
            return state
    }
}