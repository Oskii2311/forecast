import { combineReducers } from 'redux';
import { weather, weatherIsLoading, weatherHasErrored } from './reducer_weather';

const rootReducer = combineReducers({
  weather,
  weatherHasErrored,
  weatherIsLoading,
});

export default rootReducer;
