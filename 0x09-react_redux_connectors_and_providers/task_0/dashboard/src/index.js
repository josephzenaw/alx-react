// Import necessary libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import uiReducer from './reducers/uiReducer'; // Import your uiReducer

// Create the Redux store
const store = createStore(uiReducer); // Pass uiReducer to createStore

// Wrap the App component with Provider and pass the store to it
ReactDOM.render(
  <Provider store={store}>  {/* Wrap the App component with Provider */}
    <App />
  </Provider>,
  document.getElementById('root')
);

