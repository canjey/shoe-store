import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  Productdetails from './Productdetails';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom'

// import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
