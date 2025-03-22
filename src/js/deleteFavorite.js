import { deleteFavoriteAPI } from "../api/deleteFavoriteAPI";
// import { getFavoritesAPI } from "../api/getFavoritesAPI";

export const deleteFavorite = async (event) => {
  try {
    const id = event.target.getAttribute("data-id");
    await deleteFavoriteAPI(id);
    // await getFavoritesAPI().then(());
  } catch (error) {
    console.log(error);
  }
};
