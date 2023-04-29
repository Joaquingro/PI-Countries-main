import { RESET_COUNTRIES ,GET_COUNTRIES ,FILTER_BY_ACTIVITY,FILTER_BY_CONTINENT, ORDER_BY_ALFABET, ORDER_BY_POBLATION, UPDATE_ORDER } from "./type";


export const updateOrder = (order) => {
    return {
        type: UPDATE_ORDER,
        payload: order
    }
}
export const resetCountries = (data) => {
    return {
        type: RESET_COUNTRIES,
        payload: data
    }
}
export const getAllCountries = (data) =>{
        return {
            type: GET_COUNTRIES,
            payload: data
        }
}

export const filterByContinent = (continent) => {
    return {
        type: FILTER_BY_CONTINENT,
        payload: continent
    }
}

export const filterByActivity = (activity) => {
    return {
        type: FILTER_BY_ACTIVITY,
        payload: activity
    }
}

export const orderByAlfabet = (status) => {
    return {
        type: ORDER_BY_ALFABET,
        payload: status
    }
}

export const orderByPoblation = (status) => {
    return {
        type: ORDER_BY_POBLATION,
        payload: status
    }
}