import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.headerList}>
          <li className={styles.headerList__item}>
            <a>Perfumes</a>
          </li>
          <li className={styles.headerList__item}>
            <a>Favorites</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};


