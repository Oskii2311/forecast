import axios from 'axios';

const API_KEY = '4f3c9615124b01fd99761c91f22c6e12';
const URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';
export const ERROR_WEATHER = 'ERROR_WEATHER';

export function fetchWeather(city,countryCode) {
    const url = `${URL}&q=${city},${countryCode}`; 
    const request = axios.get(url);

    return request.then(response => {
        return {
            type: FETCH_WEATHER,
            payload: response
        }
      }).catch(response => {
        return {
            type: ERROR_WEATHER
        }
    })
}