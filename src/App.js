import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SortContainer from './SortContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Sorter</h1>
        <p>Test of sorting using js-flock and fast-sort.</p>
        <SortContainer />
      </div>
    );
  }
}

export default App;
