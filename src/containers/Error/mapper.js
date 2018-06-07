import { bindActionCreators } from 'redux';
import { weatherHasErrored } from '../../store/actions/index';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    weatherHasErrored,
  }, dispatch);
}

export default mapDispatchToProps;
