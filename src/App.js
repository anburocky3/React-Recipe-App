import React, { Component } from "react";
import "./App.css";
import Form from "./components/Forms";
import axios from "axios";
import Recipes from "./components/Recipes";

const API_KEY = "103cbffbf4b6b45784ac1d93fdf94b09";
const SITE = "https://www.food2fork.com/api/";

class App extends Component {
  state = {
    recipes: []
  };

  getRecipe = e => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();

    axios
      .get(`${SITE}search?key=${API_KEY}&q=${recipeName}`)
      .then(res => {
        this.setState({ recipes: res.data.recipes });
        // console.log(res.data);
      })
      .catch(err => {
        console.log(err);
        return null;
      });
  };

  render() {
    console.log(this.state.recipes);
    return (
      <div className="App">
        <header className="App-header">
          <h3>React Recipe Search</h3>
        </header>

        <Form getRecipe={this.getRecipe} />

        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
