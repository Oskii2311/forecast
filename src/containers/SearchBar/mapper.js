import { bindActionCreators } from 'redux';
import { weatherFetchData, fetchOld, resetAction } from '../../store/actions/index';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    weatherFetchData,
    fetchOld,
    resetAction,
  }, dispatch);
}

function mapStateToProps({ oldWeather }) {
  return {
    oldWeather,
  };
}

export { mapDispatchToProps, mapStateToProps };
