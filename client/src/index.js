import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Reducer from "../src/redux/reduces"
import Provider from "react-redux"
import {createStore,applyMiddleware} from "redux"
import ReduxThunk  from "redux-thunk"
import ReduxPrimise from "redux-promise"

const createStoreWithMiddleware=applyMiddleware(ReduxThunk,ReduxPrimise)(createStore)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStoreWithMiddleware(
         userReducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()

    )}>
        <App/>
    </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
