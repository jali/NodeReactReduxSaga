import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import sagaStore from './store/sagas';

import App from './components/App';

const app = document.getElementById('root');

ReactDOM.render(<Provider store={sagaStore}>
    <App />
</Provider>, app);