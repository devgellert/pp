import { GET_BOOK_DATA, SET_BOOK_DATA } from '../actions/types';

const initialState = {
    arrival: {},
    departure: {}
}

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_BOOK_DATA:
            return {
                ...state
            }
        case SET_BOOK_DATA:
            return {
                ...state,
                arrival: {
                    year: action.payload.arrival.year,
                    month: action.payload.arrival.month,
                    day: action.payload.arrival.day
                },
                departure: {
                    year: action.payload.departure.year,
                    month: action.payload.departure.month,
                    day: action.payload.departure.day
                }

            }
        default: 
            return state;
    }
}