import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import Notifications from "./Notifications";
import './index.css';

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<Notifications />, document.getElementById("root-notifications"));

ReactDOM.render(
  <React.StrictMode>
    <div id="root-notifications">
      <Notifications />
    </div>
    <div id="root">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
