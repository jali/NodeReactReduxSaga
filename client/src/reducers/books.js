import * as at from '../actions/types'

export default function books (
    state = {
        result: [],
        fetching: false,
        fetched: false,
        error: null,
    }, action) {

    switch (action.type) {
        case at.FETCH_BOOKS: {
            return {
                ...state,
                fetching: true,
                fetched: false
            }
        }
        case at.FETCH_BOOKS_REJECTED: {
            return {
                ...state,
                fetching: false,
                error: Object.assign({}, action.payload, {message: "Service not available"})
            }
        }
        case at.FETCH_BOOKS_FULFILLED: {
            return {
                ...state,
                fetching: false,
                fetched: true,
                result: action.payload,
            }
        }
        default: {
            return state
        }
    }
    
}
