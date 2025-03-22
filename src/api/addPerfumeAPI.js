export const addPerfumeAPI = async (post) => {
  const options = {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };

  return await fetch(
    "https://67bb7b18fbe0387ca13a2e9e.mockapi.io/favorites",
    options
  );
};
