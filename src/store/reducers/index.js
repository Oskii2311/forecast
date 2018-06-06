import { combineReducers } from 'redux';
import { oldWeather, weather, weatherIsLoading, weatherHasErrored } from './reducer_weather';

const rootReducer = combineReducers({
  weather,
  weatherHasErrored,
  weatherIsLoading,
  oldWeather,
});

export default rootReducer;
