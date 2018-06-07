import {
  WEATHER_HAS_ERROR,
  WEATHER_IS_LOADING,
  WEATHER_FETCH_DATA_SUCCESS,
  SEARCHED_WEATHER_FETCH_DATA_SUCCESS,
  RESET,
} from '../constants/action_type';

export function weatherHasErrored(bool) {
  return {
    type: WEATHER_HAS_ERROR,
    hasErrored: bool,
  };
}

export function resetAction() {
  return {
    type: RESET,
  };
}

export function weatherIsLoading(bool) {
  return {
    type: WEATHER_IS_LOADING,
    isLoading: bool,
  };
}

export function weatherFetchDataSuccess(items) {
  return {
    type: WEATHER_FETCH_DATA_SUCCESS,
    payload: items,
  };
}

export function SearchedweatherFetchDataSuccess(url) {
  return {
    type: SEARCHED_WEATHER_FETCH_DATA_SUCCESS,
    payload: url,
  };
}

export function fetchWeatherData(url) {
  return async (dispatch) => {
    dispatch(weatherIsLoading(true));
    dispatch(SearchedweatherFetchDataSuccess(url));
    const response = await fetch(url);
    if (!response.ok) {
      dispatch(weatherHasErrored(true));
    }
    const json = await response.json();
    dispatch(weatherIsLoading(false));
    dispatch(weatherHasErrored(false));
    if (json.message === 'city not found') {
      return false;
    }
    dispatch(weatherFetchDataSuccess(json));
  };
}
