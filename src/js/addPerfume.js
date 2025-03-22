import { addPerfumeAPI } from "../api/addPerfumeAPI";
import { getFavoritesAPI } from "../api/getFavoritesAPI";

export const addPerfume = async (event) => {
  const perfume = event.target.closest("li");

  if (!perfume) return;

  const perfumeData = {
    id: perfume.getAttribute("id"),
    title: perfume.querySelector("h2").textContent,
    price: perfume.querySelector("p").textContent,
    photo: perfume.querySelector("img").getAttribute("src"),
  };

  try {
    await addPerfumeAPI(perfumeData);
    const updatedFavorites = await getFavoritesAPI();
    console.log(updatedFavorites);
  } catch (error) {
    console.log(error);
  }
};
