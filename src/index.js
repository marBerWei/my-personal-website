import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import {Route} from 'react-router';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

const json = require('./resume.json'); // load resume file
//const rootReducer = combineReducers({})
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

	
ReactDOM.render(<Provider store={store}><Router><App jsonObj={json}/></Router></Provider>, document.getElementById('root'));