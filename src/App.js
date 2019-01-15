import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }
  componentDidMount() {
    fetch("http://opentable.herokuapp.com/api/restaurants?city=toronto")
      .then(res => res.json())
      .then(json => {
        console.log(json);
        this.setState({
          isLoaded: true,
          items: json["restaurants"]
        });
      });
  }
  render() {
    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    return (
      <div className="App">
        {this.state.items.map(item => (
          <li>
            Name: {item.name} | Address: {item.address} | Price: {item.price}
          </li>
        ))}
      </div>
    );
  }
}

export default App;
