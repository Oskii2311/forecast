import axios from 'axios';

const API_KEY = '4f3c9615124b01fd99761c91f22c6e12';
const URL_WEATHER = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
const URL_COUNTRY_CODE = 'https://restcountries.eu/rest/v2/name/';
export const FETCH_WEATHER = 'FETCH_WEATHER';
export const ERROR_WEATHER = 'ERROR_WEATHER';

export function fetchWeather(city, countryCode) {
    return axios.get(URL_COUNTRY_CODE+countryCode).then(resp => {
        const countryCode = resp.data[0].alpha2Code;
        const url = `${URL_WEATHER}&q=${city},${countryCode}`;
    
        return axios.get(url).then(response => {
            return {
                type: FETCH_WEATHER,
                payload: response
            }
          }).catch(response => {
            return {
                type: ERROR_WEATHER
            }
        })
    })
}