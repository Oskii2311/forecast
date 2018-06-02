import { 
    WEATHER_HAS_ERROR,
    WEATHER_IS_LOADING,
    WEATHER_FETCH_DATA_SUCCESS
} from '../constants/action_type';

const API_KEY = '4f3c9615124b01fd99761c91f22c6e12';
const URL_WEATHER = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
const URL_COUNTRY_CODE = 'https://restcountries.eu/rest/v2/name/';

export function weatherHasErrored(bool) {
    return {
        type: WEATHER_HAS_ERROR,
        hasErrored: bool
    };
}

export function weatherIsLoading(bool) {
    return {
        type: WEATHER_IS_LOADING,
        isLoading: bool
    };
}

export function weatherFetchDataSuccess(items) {
    return {
        type: WEATHER_FETCH_DATA_SUCCESS,
        payload: items
    };
}

export function weatherFetchData(city, country) {
    return (dispatch) => {
        dispatch(weatherIsLoading(true));
        fetch(URL_COUNTRY_CODE+country).then(res => res.json())
        .then(res => {
            const countryCode = res[0].alpha2Code;
            const url = `${URL_WEATHER}&q=${city},${countryCode}`;

            fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(weatherIsLoading(false));
                dispatch(weatherHasErrored(false));
                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(weatherFetchDataSuccess(items)))
            .catch(() => dispatch(weatherHasErrored(true)));
        }).catch(() => dispatch(weatherHasErrored(true)));
    };
}
