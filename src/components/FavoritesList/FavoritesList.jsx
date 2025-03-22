import styles from "./Favorites.module.css";
import { Component } from "react";
import { deleteFavorite } from "../../js/deleteFavorite";
import { getFavoritesAPI } from "../../api/getFavoritesAPI";
import { deleteFavoriteAPI } from "../../api/deleteFavoriteAPI";

export class FavoritesList extends Component {
  state = {
    favorites: [],
  };

  async componentDidMount() {
    await this.fetchFavorites();
  }

  async componentDidUpdate() {
    this.fetchFavorites();
    // ПОРІВНЯТИ ОТРИМАНИЙ СПИСОК ЗІ СТЕЙТОМ І ЯКЩО ВІН ВІДРІЗНЯЄТЬСЯ ТО ЗАПИСАТИ ЙОГО В СТЕЙТ
  }

  fetchFavorites = async () => {
    try {
      const data = await getFavoritesAPI();
      // this.setState({ favorites: data });
      this.setState((prevState) => ({
        favorites: data,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  handleDelete = async (event) => {
    const id = event.target.getAttribute("data-id");
    try {
      await deleteFavoriteAPI(id);
      await this.fetchFavorites();
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { favorites } = this.state;
    console.log(favorites);
    return (
      <ul className={styles.favoritesList}>
        {favorites.map((fav) => (
          <li key={fav.id}>
            <h2 className={styles.perfume__title}>{fav.title}</h2>
            <p className={styles.perfume__price}>{fav.price}</p>
            <img
              src={fav.photo}
              alt={fav.title}
              className={styles.perfume__photo}
            />
            <button data-id={fav.id} onClick={deleteFavorite}>
              Delete Favorite
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
