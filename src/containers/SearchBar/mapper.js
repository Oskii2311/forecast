import { bindActionCreators } from 'redux';
import { weatherFetchData, fetchOld } from '../../store/actions/index';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    weatherFetchData,
    fetchOld,
  }, dispatch);
}

function mapStateToProps({ oldWeather }) {
  return {
    oldWeather,
  };
}

export { mapDispatchToProps, mapStateToProps };
