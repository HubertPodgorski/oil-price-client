import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { httpRequest } from './helpers/httpRequest';

class App extends Component {
  componentDidMount = () => {
    const url = "http://10.250.162.190:3000/oil-stations";
    const method = "GET";

    httpRequest(url, method).then(response => console.log(response));
};

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
