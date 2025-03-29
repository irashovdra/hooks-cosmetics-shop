import React, { Component } from "react";
import "./App.css";
import { PerfumeList } from "./components/PerfumeList/PerfumesList";
import { Header } from "./components/Header/Header";
import { FavoritesList } from "./components/FavoritesList/FavoritesList";
import { getPerfumesAPI } from "./api/getPerfumesAPI";
import { getFavoritesAPI } from "./api/getFavoritesAPI";
import { addFavoriteAPI } from "./api/addFavoriteAPI";
import { Modal } from "./components/Modal/Modal";

class App extends Component {
  state = {
    perfumes: [],
    favorites: [],
    currentPage: "perfumes",
    isModalOpen: false,
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
      const updatedPerfume = { ...perfume, quantity: 1 };
      await addFavoriteAPI(updatedPerfume);
      const updatedFavorites = await getFavoritesAPI();
      this.setState({ favorites: updatedFavorites });
    } catch (error) {
      console.log(error);
    }
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleOpenModal = () => {
    this.setState({ isModalOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <div className="App">
        <Header
          onPageChange={this.handlePageChange}
          onOpenModal={this.handleOpenModal}
        />
        {this.state.currentPage === "perfumes" ? (
          <PerfumeList
            perfumes={this.state.perfumes}
            onAddToFavorites={this.handleAddToFavorites}
          />
        ) : (
          <FavoritesList favorites={this.state.favorites} />
        )}
        {this.state.isModalOpen && (
          <Modal
            favorites={this.state.favorites}
            onClose={this.handleCloseModal}
          />
        )}
      </div>
    );
  }
}

export default App;
