import React from "react";
import "./App.css";
import Form from "./constants/form";
import Restaurants from "./constants/restaurants";

class App extends React.Component {
  state = {
    items: []
  };

  // getRestaurants is a method we'll use to make the api call
  getRestaurants = async e => {
    const city = e.target.elements.cityName.value;

    // to prevent the page from refreshing on submit button
    e.preventDefault();

    // if they don't input a city name, we don't have to call our api
    if (!city) {
      this.processError();
    } else {
      const api_call = await fetch(
        `https://opentable.herokuapp.com/api/restaurants?city=${city}`
      );
      const response = await api_call.json();
      console.log(response);
      // our info in buried in the tag called "restaurants"
      this.setState({
        items: response["restaurants"],
        error: ""
      });
    }
  };

  // If the user doesn't type in a city and presses enter
  processError() {
    console.log("error");
    this.setState({
      error: "Please input search values..."
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Restaurant Search</h1>
        </header>
        <Form getRestaurants={this.getRestaurants} />
        <Restaurants restaurants={this.state.items} />
      </div>
    );
  }
}

export default App;
