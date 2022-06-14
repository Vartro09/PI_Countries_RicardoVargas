import { FETCH_COUNTRIES, SEARCH_COUNTRIES, COUNTRY_DETAILS, FETCH_ACTIVITIES, SEARCH_ACTIVITIES, ASC} from "../actions"

const initialState = {
    countries: [],
    filteredCountries: [],
    backUpCountries: [],
    country: [],
    arrayActivities: []
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
        case FETCH_ACTIVITIES:
            return {
                ...state,
                arrayActivities: action.payload
            }
        case SEARCH_ACTIVITIES:
            if(action.payload.length !== 0) {
                const selectedActivities = action.payload
                const filteredActivities = state.backUpCountries.filter((country) => {
                    console.log(country.activity)
                    return selectedActivities.every(i => country.activity.map(a => a.name).includes(i))
                })
                return {
                    ...state,
                    countries: filteredActivities
                }
            } else {
                return {
                    ...state,
                    countries: state.backUpCountries
                }
            }
        case ASC:
            return {
                ...state,
                countries: action.payload
            }
    
        default:
            return state
    }
}