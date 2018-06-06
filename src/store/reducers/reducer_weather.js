import {
  WEATHER_HAS_ERROR,
  WEATHER_IS_LOADING,
  WEATHER_FETCH_DATA_SUCCESS,
  SEARCHED_WEATHER_FETCH_DATA_SUCCESS,
  RESET,
} from '../constants/action_type';

export function weatherHasErrored(state = false, action) {
  switch (action.type) {
    case WEATHER_HAS_ERROR:
      return action.hasErrored;
    default:
      return state;
  }
}

export function weatherIsLoading(state = false, action) {
  switch (action.type) {
    case WEATHER_IS_LOADING:
      return action.isLoading;
    default:
      return state;
  }
}

export function weather(state = [], action) {
  switch (action.type) {
    case WEATHER_FETCH_DATA_SUCCESS:
      return [...state, action.payload];
    case RESET:
      return [];
    default:
      return state;
  }
}

export function oldWeather(state = [], action) {
  switch (action.type) {
    case SEARCHED_WEATHER_FETCH_DATA_SUCCESS:
      return [...state, action.payload];
    default:
      return state;
  }
}

