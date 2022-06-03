import React from 'react';
import ReactDOM from 'react-dom/client';
import NumberList from './components/NumberList';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

const numbers = [1,2,3,4,5];

root.render(
  <NumberList numbers={numbers} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
