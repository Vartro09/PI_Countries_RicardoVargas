import { 
    FETCH_COUNTRIES, 
    SEARCH_COUNTRIES, 
    COUNTRY_DETAILS, 
    ORDER_A_Z, ORDER_Z_A, 
    ORDER_POPULATION_DOWN, 
    ORDER_POPULATION_UP, 
    FILTER_BY_CONTINENT, 
    POST_ACTIVITY, 
    FETCH_ACTIVITIES, 
    // SEARCH_ACTIVITIES,
    FILTER_BY_ACTIVITIES } from "../actions"

const initialState = {
    countries: [],
    searchCountriesByName: [],
    filteredCountries: [],
    filteredContinents: [],
    backUpCountries: [],
    country: [],
    arrayActivities: [],
}


export default function reducer(state= initialState, action) {
    switch (action.type) {
        case FETCH_COUNTRIES:
            console.log(state.filteredCountries)
            return {
                ...state,
                countries: action.payload,
                filteredCountries: action.payload
            }
        case SEARCH_COUNTRIES:
            return{
                ...state,
                searchCountriesByName: action.payload
            }
        case COUNTRY_DETAILS:
            return {
                ...state,
                country: action.payload
            }
        case POST_ACTIVITY:
            return {
                ...state,
            };
        case FETCH_ACTIVITIES:
            return {
                ...state,
                arrayActivities: action.payload
            }
        case FILTER_BY_ACTIVITIES:
            if(action.payload.length !== 0) {
                const selectedActivities = action.payload
                let initialCountries = [...state.countries]
                const   filteredActivities = initialCountries.filter((country) => {
                    
                    // if (country.activities.length === 1) {
                    //     return country.activities[0].name === selectedActivities;
                    // }

                    const listActivities = country.activities.map( a => a.name)
                    return listActivities.includes(selectedActivities)
                    // if (country.activities.length >= 1) {
                    //     return country.activities.map(a => a.name === selectedActivities);
                       
                    // }
                    // if (country.activities[0].name) {
                    //     return country.activities[0].name === selectedActivities
                    // }
                    // return state.filteredCountries.every(i => country.activities.map(a => a.name).includes(i))
                })
                console.log(filteredActivities)
                return {
                    ...state,
                    filteredCountries: filteredActivities
                }
            } else {
                return {
                    ...state,
                    filteredCountries: state.countries
                }
            }
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
        case FILTER_BY_CONTINENT:
            let arrayContinent = [...state.countries]
            let continentFounded = arrayContinent.filter( c => action.payload === c.continent)
            return {
                ...state,
                filteredCountries: continentFounded
            }
        
    
        default:
            return state
    }
}