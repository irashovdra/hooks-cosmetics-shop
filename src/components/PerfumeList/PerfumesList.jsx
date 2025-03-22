import styles from "./PerfumeList.module.css";
import { Perfume } from "../Perfume/Perfume.jsx";

export const PerfumeList = ({ perfumes, onAddToFavorites }) => {
  return (
    <ul>
      {perfumes.map((perfume) => (
        <Perfume
          key={perfume.id}
          perfume={perfume}
          onAddToFavorites={onAddToFavorites}
        />
      ))}
    </ul>
  );
};
