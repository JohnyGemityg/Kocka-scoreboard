import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import ReduxLogger from 'redux-logger';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import rootReducer from './reducers';


//const initStore = {};
const middleware = applyMiddleware(ReduxLogger);
const store = createStore(rootReducer, middleware);

console.log(store.getState());


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
