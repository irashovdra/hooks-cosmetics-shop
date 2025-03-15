import React, { Component } from "react";
import "./App.css";
import { PerfumeList } from "./components/PerfumeList/PerfumesList";
import { Header } from "./components/Header/Header";
import { FavoritesList } from "./components/Favorites/Favorites";
import { getPerfumesAPI } from "./services/getPerfumesAPI";

class App extends Component {
  state = {
    perfumes: [],
    favorites: [],
  };

  componentDidMount() {
    getPerfumesAPI()
      .then((data) => {
        this.setState({ perfumes: data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  addToFavorites = (perfume) => {
    this.setState((prevState) => {
      if (prevState.favorites.find((fav) => fav.id === perfume.id)) {
        return null; // Avoid adding duplicates
      }
      return {
        favorites: [...prevState.favorites, perfume],
      };
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <FavoritesList favorites={this.state.favorites} />
        <PerfumeList
          perfumes={this.state.perfumes}
          onAddToFavorites={this.addToFavorites}
        />
      </div>
    );
  }
}

export default App;
