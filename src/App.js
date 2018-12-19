import React, { Component } from "react";
import "./App.css";
import ArrivalInput from "./components/ArrivalInput";
import ArrivalData from "./components/ArrivalData";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [
        { location: "Yogyakarta", totalUnit: 2 },
        { location: "Uluwatu", totalUnit: 11 },
        { location: "Canggu", totalUnit: 6 }
      ]
    };
  }

  render() {
    return (
      <div>
        <div className="App">
          <ArrivalInput />
        </div>
        <hr />
        <div className="App">
          {this.state.properties.map(property => (
            <ArrivalData property={property} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
