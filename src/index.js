import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
 
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import catsReducer from './reducers/catsReducer';
 

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(catsReducer, composeEnhancers(applyMiddleware(thunk)))

// console.log(store.getState())
 
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);