const FETCH_ALL_PETSITTERS_URL = "localhost:5000/api/petsitters";

export const fetchPetSitterListByPage = async (page: number) => {
  const url = new URL(FETCH_ALL_PETSITTERS_URL);

  url.searchParams.append("page", page.toString());

  const response = await fetch(url);
  const data = await response.json();

  return data;
};
