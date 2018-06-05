import { bindActionCreators } from 'redux';
import { weatherFetchData } from '../../store/actions/index';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    weatherFetchData,
  }, dispatch);
}

export default mapDispatchToProps;
