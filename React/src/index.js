import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './d20_food';
// import App from './components/d21_edit';
// import App from './chess_board';
import App from './d22/MemeGenerator';
import reportWebVitals from './reportWebVitals';


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
