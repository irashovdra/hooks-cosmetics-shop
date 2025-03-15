import styles from "./Perfume.module.css";

export const Perfume = ({ perfume, onAddToFavorites }) => {
  return (
    <li className={styles.perfume}>
      <h2 className={styles.perfume__title}>{perfume.title}</h2>
      <p className={styles.perfume__price}>{perfume.price}</p>
      <img
        src={perfume.photo}
        alt={perfume.title}
        className={styles.perfume__photo}
      />
      <button onClick={() => onAddToFavorites(perfume)}>
        Add To Favorites
      </button>
    </li>
  );
};
