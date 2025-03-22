import { addPerfumeAPI } from "../api/addPerfumeAPI";
import { getFavoritesAPI } from "../api/getFavoritesAPI";

export const addPerfume = (event) => {
  const perfume = event.target.parentNode;
  console.log(perfume);

  const perfumeData = {
    title: perfume.querySelector("h2").textContent,
    price: perfume.querySelector("p").textContent,
    photo: perfume.querySelector("img").getAttribute,
    id: perfume.id,
  };

  addPerfumeAPI(perfumeData).catch((error) => console.log(error));
  getFavoritesAPI()
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
  return perfumeData;
};
