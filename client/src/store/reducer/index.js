import { FETCH_COUNTRIES, SEARCH_COUNTRIES, COUNTRY_DETAILS, ORDER_A_Z, ORDER_Z_A, ORDER_POPULATION_DOWN, ORDER_POPULATION_UP} from "../actions"

const initialState = {
    countries: [],
    filteredCountries: [],
    backUpCountries: [],
    country: [],
    arrayActivities: [],
}


export default function reducer(state= initialState, action) {
    switch (action.type) {
        case FETCH_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                filteredCountries: action.payload
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
        // case FETCH_ACTIVITIES:
        //     return {
        //         ...state,
        //         arrayActivities: action.payload
        //     }
        // case SEARCH_ACTIVITIES:
        //     if(action.payload.length !== 0) {
        //         const selectedActivities = action.payload
        //         const filteredActivities = state.backUpCountries.filter((country) => {
        //             return selectedActivities.every(i => country.activity.map(a => a.name).includes(i))
        //         })
        //         return {
        //             ...state,
        //             countries: filteredActivities
        //         }
        //     } else {
        //         return {
        //             ...state,
        //             countries: state.backUpCountries
        //         }
        //     }
        case ORDER_A_Z :
            let backup = [ ...state.countries ]
            let orderAZ = backup.sort(function (a,b) {
                return ('' + a.name).localeCompare(b.name);
            })
            return {
                ...state,
                filteredCountries: orderAZ,
            }
        case ORDER_Z_A :
            let backup2 = [ ...state.countries ]
            let orderZA = backup2.sort(function (b,a) {
                return ('' + a.name).localeCompare(b.name);
            })
            return {
                ...state,
                filteredCountries: orderZA,
            }
        case ORDER_POPULATION_DOWN :
            let backup3 = [ ...state.countries ]
            let orderPopulationDown = backup3.sort(function (a,b) {
                return a.population - b.population ;
            })
            return {
                ...state,
                filteredCountries: orderPopulationDown,
            }
        case ORDER_POPULATION_UP :
            let backup4 = [ ...state.countries ]
            let orderPopulationUp = backup4.sort(function (a,b) {
                return b.population - a.population ;;
            })
            return {
                ...state,
                filteredCountries: orderPopulationUp,
            }
    
        default:
            return state
    }
}