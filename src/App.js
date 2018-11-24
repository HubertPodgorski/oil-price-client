import React, { Component } from "react";
import "./App.css";
import { httpRequest } from './helpers/httpRequest';
import AddStation from './containers/AddStation';

class App extends Component {
    componentDidMount = () => {
        const url = "http://10.250.162.190:3000/oil-stations";
        const method = "GET";

        httpRequest(url, method).then(response => console.log(response));
    };

    render() {
        return (
            <AddStation />
        );
    }
}

export default App;
