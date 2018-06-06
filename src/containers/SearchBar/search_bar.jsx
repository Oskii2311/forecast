import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from './mapper';
import SearchInput from '../../components/SearchInput/search_input';
import { URL_WEATHER, URL_COUNTRY_CODE } from '../../store/constants/url';

class SearchBar extends Component {
  static createNewUrl(json, city) {
    const countryCode = json[0].alpha2Code;
    const url = `${URL_WEATHER}&q=${city},${countryCode}`;

    return url;
  }

  static async fetchCountrycode(city, country) {
    const response = await fetch(URL_COUNTRY_CODE + country);
    if (!response.ok) {
      return null;
    }
    const json = await response.json();
    const newUrl = SearchBar.createNewUrl(json, city);

    return newUrl;
  }

  constructor(props) {
    super(props);
    this.state = SearchBar.getinitialState();

    this.onInputChangeCity = this.onInputChangeCity.bind(this);
    this.onInputChangeCountryCode = this.onInputChangeCountryCode.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.refreshWeather = this.refreshWeather.bind(this);
  }

  onInputChangeCity(event) {
    this.setState({ term: event.target.value });
  }

  onInputChangeCountryCode(event) {
    this.setState({ countryCode: event.target.value });
  }
  

  async onFormSubmit(event) {
    const { term, countryCode } = this.state;
    if (!term || !countryCode) {
      event.preventDefault();
      return false;
    }
    event.preventDefault();
    const urlWithCountrycode = await SearchBar.fetchCountrycode(term, countryCode);

    if (urlWithCountrycode) {
      this.props.fetchWeatherData(urlWithCountrycode);
    } else {
      this.props.weatherHasErrored(true);
    }
    this.setState(SearchBar.getinitialState());

    return true;
  }

  static getinitialState() {
    return {
      term: '',
      countryCode: '',
    };
  }

  refreshWeather() {
    this.props.resetAction();
    this.props.oldWeather.forEach((url) => {
      this.props.fetchWeatherData(url);
    });
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
          <button
            className="btn btn-light"
            onClick={this.refreshWeather}
            disabled={this.props.oldWeather.length === 0}
          >
          Refresh
          </button>
        </span>
      </form>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
