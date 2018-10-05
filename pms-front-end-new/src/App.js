import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import "react-table/react-table.css";
// import logo from './logo.svg';
// import './App.css';
// import './style/scrollstyle.scss';
// import 'bootstrap/dist/css/bootstrap.css';
import HomePage from './HomePage';

// import AppWrapper from '../src/components/dashboard_component/layouts/Dashboard/Dashboard.jsx';

const App = () => {
    return(
        // style={{overflow : 'hidden'}}
        <HomePage />
    )
}
  // export default App
ReactDOM.render(
    (
        <BrowserRouter>
          <App />
        </BrowserRouter>
    ), document.getElementById('root')
);

export default App;