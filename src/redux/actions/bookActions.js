import { GET_BOOK_DATA, SET_BOOK_DATA } from './types';

export const getBookData = () => dispatch => {
   return dispatch({
       type: GET_BOOK_DATA
   })
}

export const setBookData = (data) => dispatch => {
    return dispatch({
        type: SET_BOOK_DATA,
        payload: data
    })
 }