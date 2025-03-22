export const deleteFavoriteAPI = async (id) => {
  const options = {
    method: "DELETE",
  };

  return await fetch(
    `https://67bb7b18fbe0387ca13a2e9e.mockapi.io/favorites/${id}`,
    options
  );
};
