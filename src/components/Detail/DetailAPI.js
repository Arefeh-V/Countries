
export const getCountriyByCode = async (code) => {
  const endpoint = `https://restcountries.com/v2/alpha/${code}`;
  const data = await (await fetch(endpoint)).json();
  return data;
};
