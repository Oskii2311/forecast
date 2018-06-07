import { bindActionCreators } from 'redux';
import { weatherIsLoading, fetchWeatherData, resetAction, weatherHasErrored } from '../../store/actions/index';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchWeatherData,
    resetAction,
    weatherHasErrored,
    weatherIsLoading,
  }, dispatch);
}

function mapStateToProps({ oldWeather }) {
  return {
    oldWeather,
  };
}

export { mapDispatchToProps, mapStateToProps };
