import styles from "./Favorites.module.css";
import { Component, useEffect, useState } from "react";
import { getFavoritesAPI } from "../../api/getFavoritesAPI";
import { deleteFavoriteAPI } from "../../api/deleteFavoriteAPI";
import { updateFavoriteAPI } from "../../api/updateFavoriteAPI";

export const FavoritesList = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {
    try {
      const data = await getFavoritesAPI();
      setFavorites(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteFavoriteAPI(id);
      fetchFavorites();
    } catch (error) {
      console.log(error);
    }
  };

  const handleQuantityChange = async (id, title, price, photo, newQuantity) => {
    console.log(id, title, price, photo, newQuantity);
    const updatedFavorites = favorites.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );

    setFavorites(updatedFavorites);

    try {
      await updateFavoriteAPI(id, {
        title: title,
        price: price,
        photo: photo,
        quantity: String(newQuantity),
      });
    } catch (error) {
      console.log(error);
    }
  };

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
              onChange={(e) =>
                handleQuantityChange(
                  fav.id,
                  fav.title,
                  fav.price,
                  fav.photo,
                  Number(e.target.value)
                )
              }
            />
          </div>
          <button
            className={styles.delete__btn}
            data-id={fav.id}
            onClick={() => handleDelete(fav.id)}
          >
            Delete Product
          </button>
        </li>
      ))}
    </ul>
  );
};
