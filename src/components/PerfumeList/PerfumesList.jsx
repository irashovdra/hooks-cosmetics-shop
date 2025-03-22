import styles from "./PerfumeList.module.css";
import { Perfume } from "../Perfume/Perfume.jsx";

export const PerfumeList = ({ perfumes }) => {
  return (
    <ul>
      {perfumes.map((perfume) => (
        <Perfume key={perfume.id} perfume={perfume} />
      ))}
    </ul>
  );
};
