import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {user} from "../src/redux/reduces"
import {Provider} from "react-redux"
import {createStore,applyMiddleware} from "redux"
import ReduxThunk  from "redux-thunk"
import ReduxPrimise from "redux-promise"
import {BrowserRouter as Router} from "react-router-dom"

const createStoreWithMiddleware=applyMiddleware(ReduxThunk,ReduxPrimise)(createStore)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStoreWithMiddleware(
         user,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()

    )}>
        <Router>
        <App/>
        </Router>
    </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);

