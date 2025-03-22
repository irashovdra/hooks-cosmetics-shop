import styles from "./Header.module.css";

export const Header = ({ onPageChange }) => {
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
            Favorites
          </li>
        </ul>
      </nav>
    </header>
  );
};
