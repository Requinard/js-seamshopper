import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux';
import {logger} from 'redux-logger';
import thunk from 'redux-thunk';
import { actionStorageMiddleware, createStorageListener } from 'redux-state-sync';


const middlewares = [
    actionStorageMiddleware,
    thunk,
    logger
]

let store = createStore(
    () => {},
    applyMiddleware(...middlewares)
);

createStorageListener(store);


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
