import styles from "./Favorites.module.css";

export const FavoritesList = ({ favorites }) => {
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
        </li>
      ))}
    </ul>
  );
};
