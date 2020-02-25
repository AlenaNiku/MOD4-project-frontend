import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducer'
import './index.css';
import App from './App';

let defaultState = {
  recipesArray: [],
  recipe: {},
//   searchTerm: ""
};

let reduxStore = createStore(reducer, defaultState, applyMiddleware(thunk));       // reducer manipulates and makes changes to our state tree

ReactDOM.render(
  <Provider store={reduxStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);



// ROUTER
// 1. npm install react-router-dom
// 2. import {BrowserRouter} from 'react-router-dom' on top of the file
// 3. wrap App component with <BrowserRouter> component (it will be passing certain properties and information to our App (the URL/ history info))

// REDUX
// 1. npm install redux and react-redux
// 2. create STORE (used to store state in a central place), expects reducer as an argument (REDUCER is a function that makes changes to our state tree inside of our redux store ). STORE IS NOT STATE! Store HOLDS state (store is just and object)
    // REDUCER - must take in STATE and ACTION as arguments
    // DISPATCH - a function called on store that calls the reducer function and passes in up to 2 arguments: a required argument of an object that must have a key named TYPE, and an optional arg. called PAYLOAD that holds any additional info needed.
    // ACTION - the parameter that represents the second argument passed into the reducer function. It's an object with a key named "TYPE"

    // STORE will automaticcally pass STATE to REDUCER. we need to let REDUCER know what to do based on the type of Action

// 3. Import PROVIDER (from react-redux library) and wrap App with it. The job of the Provider is to take our Store from Redux and give access to it to our App (the same way BrowserRouter takes props from our window and gives it to our App). Pass STORE as a prop to the Provider. Only access, because it doesn't necessarily give your components the state just yet (this is what we have connect() for).
