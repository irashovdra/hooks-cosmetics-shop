import styles from "./Perfume.modal.css";

export const Perfume = ({ title, price, photo }) => {
  return (
    <li className={styles.perfume}>
      <h2 className={styles.perfume__title}>{title}</h2>
      <p className={styles.perfume__price}>{price}</p>
      <img src={photo} alt={title} className={styles.perfume__photo} />
    </li>
  );
};
