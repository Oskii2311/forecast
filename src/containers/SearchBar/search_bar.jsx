import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapDispatchToProps from './mapper';
import SearchInput from '../../components/SearchInput/search_input';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = SearchBar.getinitialState();

    this.onInputChangeCity = this.onInputChangeCity.bind(this);
    this.onInputChangeCountryCode = this.onInputChangeCountryCode.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChangeCity(event) {
    this.setState({ term: event.target.value });
  }

  onInputChangeCountryCode(event) {
    this.setState({ countryCode: event.target.value });
  }

  onFormSubmit(event) {
    const { term, countryCode } = this.state;
    if (!term || !countryCode) {
      event.preventDefault();
      return false;
    }
    event.preventDefault();

    this.props.weatherFetchData(term, countryCode);
    this.setState(SearchBar.getinitialState());

    return true;
  }

  static getinitialState() {
    return {
      term: '',
      countryCode: '',
    };
  }

  render() {
    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <SearchInput
          placeholder="City"
          value={this.state.term}
          onChange={this.onInputChangeCity}
        />
        <SearchInput
          placeholder="Country"
          value={this.state.countryCode}
          onChange={this.onInputChangeCountryCode}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-light">Submit</button>
        </span>
      </form>
    );
  }
}

export default connect(null, mapDispatchToProps)(SearchBar);
