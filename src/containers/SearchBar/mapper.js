import { bindActionCreators } from 'redux';
import { fetchWeatherData, resetAction, weatherHasErrored } from '../../store/actions/index';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchWeatherData,
    resetAction,
    weatherHasErrored,
  }, dispatch);
}

function mapStateToProps({ oldWeather }) {
  return {
    oldWeather,
  };
}

export { mapDispatchToProps, mapStateToProps };
