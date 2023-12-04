import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


class SearchPage extends React.Component {

  constructor() {
      super();
      
      this.state= {
          onDisplay: false,
      }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
          onDisplay: true,
      })
    }, 0)
  }

  render() {

      let classList = '';

      if(this.state.onDisplay === false) {
          classList = 'SearchPage';
      } else {
          classList = 'SearchPage SearchPage--active';
      }

      return(
          <div className={classList}>lala</div>
      )
  }
}

ReactDOM.render(<SearchPage/>, document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
