import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line
import ReactDOMv17 from 'react-dom';
import './index.css';
// import App from './App';
// import App from './components/BetterScroll'
import App from './components/PropTypes'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Old Api
// ReactDOMv17.render(<App />, document.getElementById("root"))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
