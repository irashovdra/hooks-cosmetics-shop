export const getFavoritesAPI = async () => {
  return await fetch(
    "https://67bb7b18fbe0387ca13a2e9e.mockapi.io/favorites"
  ).then((response) => {
    return response.json();
  });
};
