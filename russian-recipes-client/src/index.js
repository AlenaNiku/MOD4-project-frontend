import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('root'));


serviceWorker.unregister();




// 1. npm install react-router-dom
// 2. import {BrowserRouter} from 'react-router-dom' on top of the file
// 3. wrap App component with <BrowserRouter> component (it will be passing certain properties and information to our App (the URL/ history info))