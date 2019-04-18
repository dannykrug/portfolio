import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        Danny Krug Portfolio
        <BrowserRouter>
        <Link to="./components/About">About</Link>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
