import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SignInView from './Pages/sign-in/sign-in';
import RegisterView from './Pages/register/register';
import MainView from './Pages/main/main';
import App from './Pages/app/app';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
