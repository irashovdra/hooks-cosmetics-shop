export const updateFavoriteAPI = async (id, updatedData) => {
  const options = {
    method: "PUT",
    body: JSON.stringify(updatedData),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };

  return await fetch(
    `https://67bb7b18fbe0387ca13a2e9e.mockapi.io/favorites${id}`,
    options
  ).then((response) => response.json());
};
