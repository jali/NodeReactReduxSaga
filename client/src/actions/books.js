import * as at from './types'
import axios from 'axios';

export default function fetchAllBooks() {
    return (dispatch) => {
        axios.get('http://localhost:3002/book')
            .then((response) => {
            dispatch({type: at.FETCH_BOOKS_FULFILLED, payload: response.data})
        })
            .catch((error) => {
                dispatch({type: at.FETCH_BOOKS_REJECTED, payload: error})
            })
    }
}
