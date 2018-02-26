import React, { Component } from 'react';
import './App.css';

import axios from 'axios';
import {HashRouter, Route, Link, Switch} from 'react-router-dom';
import Routes from './routes';


class App extends Component {


  render() {
    return (
      <div className="App">
          <Routes/>
      </div>
    );
  }
}

export default App;
