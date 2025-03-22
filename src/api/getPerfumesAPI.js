export const getPerfumesAPI = async () => {
  return await fetch(
    "https://67bb7b18fbe0387ca13a2e9e.mockapi.io/parfumes"
  ).then((response) => {
    return response.json();
  });
};
