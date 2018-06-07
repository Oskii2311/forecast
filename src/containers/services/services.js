import { URL_WEATHER, URL_COUNTRY_CODE } from '../constants/url';

function createNewUrl(json, city) {
  const countryCode = json[0].alpha2Code;
  const url = `${URL_WEATHER}&q=${city},${countryCode}`;

  return url;
}

async function fetchCountrycode(city, country) {
  const response = await fetch(URL_COUNTRY_CODE + country);
  if (!response.ok) {
    return null;
  }
  const json = await response.json();
  const countryCodeUrl = createNewUrl(json, city);

  return countryCodeUrl;
}

export default fetchCountrycode;
