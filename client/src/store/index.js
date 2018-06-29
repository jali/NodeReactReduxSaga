import { applyMiddleware, createStore } from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import Reducer from '../reducers';

const middleware = applyMiddleware(promise(), thunk);

export default createStore(Reducer, composeWithDevTools(middleware));