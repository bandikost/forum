import React from 'react';
import ReactDOM from 'react-dom';
import Loading from './Loading'; 
import App from './App';
import reportWebVitals from './reportWebVitals';

const renderApp = () => {
  const root = ReactDOM.createRoot(<Loading />, document.getElementById('root'));
};
window.onload = renderApp;



root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
