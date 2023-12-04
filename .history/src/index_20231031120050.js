import React from 'react';
import ReactDOM from 'react-dom';
import Loading from './Loading'; 
import App from './App';
import reportWebVitals from './reportWebVitals';


window.onload = renderApp;

ReactDOM.render(<Loading />, document.getElementById('root'));

const renderApp = () => { ReactDOM.createRoot(document.getElementById('root')); }
renderApp.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
