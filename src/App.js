import React, { Component } from "react";
import "./App.css";
import { PerfumeList } from "./components/PerfumeList/PerfumesList";
import { Header } from "./components/Header/Header";
import { FavoritesList } from "./components/FavoritesList/FavoritesList";
import { getPerfumesAPI } from "./api/getPerfumesAPI";
import { getFavoritesAPI } from "./api/getFavoritesAPI";
import { addFavoriteAPI } from "./api/addFavoriteAPI";

class App extends Component {
  state = {
    perfumes: [],
    favorites: [],
    currentPage: "perfumes",
  };

  componentDidMount() {
    getPerfumesAPI()
      .then((data) => {
        this.setState({ perfumes: data });
      })
      .catch((error) => console.log(error));

    getFavoritesAPI()
      .then((data) => {
        this.setState({ favorites: data });
      })
      .catch((error) => console.log(error));
  }

  handleAddToFavorites = async (perfume) => {
    try {
      await addFavoriteAPI(perfume);
      const updatedFavorites = await getFavoritesAPI();
      this.setState({ favorites: updatedFavorites });
    } catch (error) {
      console.log(error);
    }
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    return (
      <div className="App">
        <Header onPageChange={this.handlePageChange} />
        {this.state.currentPage === "perfumes" ? (
          <PerfumeList
            perfumes={this.state.perfumes}
            onAddToFavorites={this.handleAddToFavorites}
          />
        ) : (
          <FavoritesList favorites={this.state.favorites} />
        )}
      </div>
    );
  }
}

export default App;
