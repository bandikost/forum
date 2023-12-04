import React from 'react';
import ReactDOM from 'react-dom';
import Loading from './Loading'; 
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(root);

const renderApp = () => {
  reactRoot.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};
window.onload = renderApp;

reactRoot.render(<Loading />);

reportWebVitals();
