import { FILTER_BY_ACTIVITY,FILTER_BY_CONTINENT, GET_COUNTRIES, ORDER_BY_ALFABET, ORDER_BY_POBLATION, RESET_COUNTRIES } from "./type";

const initialState = {
    allCountries: [],
    filteredCountries: [],
    order: ""
}

const reducer = (state = initialState, action) => {
    
    switch (action.type) {

        case RESET_COUNTRIES:
            return {
                ...state,
                filteredCountries: state.allCountries,
                order: ""
            }
        case GET_COUNTRIES:
            return {
                ...state,
                allCountries: action.payload,
                filteredCountries: action.payload,

            }
        case FILTER_BY_CONTINENT:
            const filterByContinent = state.allCountries.slice().filter(conti => {
                return conti.continents === action.payload;
            });
            return {
                ...state,
                filteredCountries: filterByContinent,
                order: "continent"
            }
            
        case FILTER_BY_ACTIVITY:
            const filteredActivity = state.allCountries.slice().filter(country => {
                return country.activities.some(act => act.name === action.payload)
            });
            return {
                ...state,
                filteredCountries: filteredActivity,
                order: "activity"
            };

        case ORDER_BY_ALFABET:
            return {
                ...state,
                filteredCountries: action.payload === "ascendente" ?
                state.allCountries.slice().sort((a, b) => a.name.localeCompare(b.name)) :
                state.allCountries.slice().sort((a, b) => b.name.localeCompare(a.name)), 
                order: "name"
            }
        
        case ORDER_BY_POBLATION:
            return {
                ...state,
                filteredCountries: 
                action.payload === "ascendente" ? state.allCountries.slice().sort((a,b) => b.population - a.population) : state.allCountries.slice().sort((a,b) => a.population - b.population),
                order: "population"
            }
            
    
        default:
            return {...state};
            
    }
}

export default reducer;