import styles from "./Favorites.module.css";
import { Component } from "react";
import { getFavoritesAPI } from "../../api/getFavoritesAPI";
import { deleteFavoriteAPI } from "../../api/deleteFavoriteAPI";
import { updateFavoriteAPI } from "../../api/updateFavoriteAPI";

export class FavoritesList extends Component {
  state = {
    favorites: [],
  };

  async componentDidMount() {
    await this.fetchFavorites();
  }

  async componentDidUpdate(prevState) {
    const data = await getFavoritesAPI();
    if (JSON.stringify(prevState.favorites) !== JSON.stringify(data)) {
      this.setState({ favorites: data });
    }
  }

  fetchFavorites = async () => {
    try {
      const data = await getFavoritesAPI();
      this.setState(() => ({
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

  handleQuantityChange = (event, id) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (isNaN(newQuantity) || newQuantity < 1) return;

    this.setState((prevState) => ({
      favorites: prevState.favorites.map((fav) =>
        fav.id === id ? { ...fav, quantity: newQuantity } : fav
      ),
    }));
  };

  handleQuantityBlur = async (id) => {
    const favorite = this.state.favorites.find((fav) => fav.id === id);
    if (!favorite) return;

    try {
      await updateFavoriteAPI(id, favorite);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { favorites } = this.state;

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
            <div className={styles.favorites__center}>
              <label className={styles.favorites__label}>Quantity:</label>
              <input
                className={styles.favorites__quantity}
                type="number"
                min={1}
                value={fav.quantity || 1}
                onChange={(event) => this.handleQuantityChange(event, fav.id)}
              />
            </div>
            <button
              className={styles.delete__btn}
              data-id={fav.id}
              onClick={this.handleDelete}
            >
              Delete Product
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
