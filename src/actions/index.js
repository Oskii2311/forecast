import axios from 'axios';

const API_KEY = '4f3c9615124b01fd99761c91f22c6e12';
const URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${URL}&q=${city},pl`; 
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}