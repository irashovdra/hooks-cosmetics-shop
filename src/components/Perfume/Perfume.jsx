import styles from "./Perfume.module.css";

export const Perfume = ({ perfume, onAddToFavorites }) => {
  return (
    <li key={id} className={styles.perfume}>
      <h2 className={styles.perfume__title}>{title}</h2>
      <p className={styles.perfume__price}>{price}</p>
      <img src={photo} alt={title} className={styles.perfume__photo} />
      <button onClick={() => onAddToFavorites(perfume)}>
        Add To Favorites
      </button>
    </li>
  );
};
