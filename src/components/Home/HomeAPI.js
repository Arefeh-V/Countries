export const getCountries = async () => {
  const endpoint = `https://restcountries.com/v2/all`;
  const data = await (await fetch(endpoint)).json();
  return data;
};

export const getCountriySearch = async (name) => {
  const endpoint = `https://restcountries.com/v2/name/${name}`;
  const data = await (await fetch(endpoint)).json();
  return data;
};

export const getCountriyByContinent = async (name) => {
  const endpoint = `https://restcountries.com/v3.1/region/${name}`;
  debugger
  const data = await (await fetch(endpoint)).json();
  return data;
};
