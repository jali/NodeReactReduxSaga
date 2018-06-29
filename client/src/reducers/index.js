import { combineReducers } from 'redux';
import books from './books';
import comments from './comments';

const Reducer = combineReducers({
    books,
    comments,
});

export default Reducer;