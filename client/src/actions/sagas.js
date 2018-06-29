import * as at from './types'
import axios from 'axios';
import { delay } from 'redux-saga';
import { call, put, all, takeEvery } from 'redux-saga/effects';

function getBooks(){
    console.log("getting books from api")
    return axios.get('http://localhost:3002/book');
}
// id="5a5c9fa227b93d3790c0ca0e"
// /book/${id}
function getComments() {
    console.info("getting comments from api")
    return axios.get(`http://localhost:3003/comment`)
}

// Sagas
function* helloSaga() {
    yield delay(1000);
    console.log('delayed Hello Saga from helloSaga!')
  }
  
// watcher saga: see every action that is dispatched to redux stor
// if it matches, then they handle that by assigning to worker saga
export function* watchFetchStuff() {
    console.log("watching fetch comment saga")
    yield* takeEvery('FETCH_COMMENT', fetchCommentsSaga)
    // yield* takeLatest('FETCH_COMMENT', fetchCommentsSaga)
}

// depending on the type of action one of the following could be helpful:
// takeEvery = takes every matching action and runs the instructed saga, can run concurrent tasks
// takeLatest = takes every matching action and runs the instructed saga but cancels any previouse saga task if it is still running


export function* fetchBooksSaga() {
    console.log("Hello sagas")
    try {
        // call runs a function, if it returns a promise then pauses the saga until the promise is resolved
        const response = yield call(getBooks);
        // put will create dispatch effect
        // or put dispatches an action
        yield put({type: at.FETCH_BOOKS_FULFILLED, payload: response.data})
        console.log("yielded results")
        // dispatch({type: at.FETCH_BOOKS_FULFILLED, payload: response.data})
    } catch (e) {
        // dispatch({type: at.FETCH_BOOKS_REJECTED, payload: error})
        yield put({type: at.FETCH_BOOKS_REJECTED, payload: e})
    }   
}

// worker saga
export function* fetchCommentsSaga() {
    console.log("Hello comment saga")
    try {
        console.log("connecting to comment service")
        yield delay(5000)
        const response = yield call(getComments);
        // put will create dispatch effect
        yield put({type: at.FETCH_COMMENTS_FULFILLED, payload: response.data})
        // dispatch({type: at.FETCH_BOOKS_FULFILLED, payload: response.data})
    } catch (e) {
        // dispatch({type: at.FETCH_BOOKS_REJECTED, payload: error})
        yield put({type: at.FETCH_COMMENTS_REJECTED, payload: e})
    }   
}

export default function* rootSaga() { 
    yield all([
        helloSaga(),
        watchFetchStuff(), 
        fetchBooksSaga(),
        fetchCommentsSaga()
    ])
};
