import { getFavoritesAPI } from "../api/getFavoritesAPI";
import { addPerfume } from "./addPerfume";
import { Component } from "react";

export class Favorites extends Component {
  state = {
    favorites: [],
  };

  componentDidMount() {
    getFavoritesAPI().then((favorites) => this.setState({ favorites }));
  }

  handleAdd = async (event) => {
    await addPerfume(event);
    const updatedFavorites = await getFavoritesAPI();
    this.setState({ favorites: updatedFavorites });
  };

  render() {
    return (
      <div>
        <h2>Favorites</h2>
        <ul>
          {this.state.favorites.map((perfume) => (
            <li key={perfume.id}>
              <h2>{perfume.title}</h2>
              <p>{perfume.price}</p>
              <img src={perfume.photo} alt={perfume.title} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
