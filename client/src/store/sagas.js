import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import Reducer from '../reducers';
import rootSaga from '../actions/sagas';


const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware);

const sagaStore = createStore(Reducer, composeWithDevTools(middleware));

console.log("running all sagas")
sagaMiddleware.run(rootSaga);

export default sagaStore;