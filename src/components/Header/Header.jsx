import styles from "./Header.module.css";

export const Header = ({ onPageChange, onOpenModal }) => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.headerList}>
          <li
            className={styles.headerList__item}
            onClick={() => onPageChange("perfumes")}
          >
            Perfumes
          </li>
          <li
            className={styles.headerList__item}
            onClick={() => onPageChange("favorites")}
          >
            Basket
          </li>
        </ul>
      </nav>
      <button className={styles.order__button} onClick={onOpenModal}>
        Order
      </button>
    </header>
  );
};
