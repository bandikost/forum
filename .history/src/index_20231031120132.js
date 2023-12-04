import React from 'react';
import ReactDOM from 'react-dom';
import Loading from './Loading'; 
import App from './App';
import reportWebVitals from './reportWebVitals';

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};
window.onload = renderApp;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
