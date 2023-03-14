export const extractIdFromURL = (url: string) => {
  const values = url.split("/");
  return values[2];
};
