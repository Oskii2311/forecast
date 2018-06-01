import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { weatherFetchData } from '../store/actions/index';
import './style/weather_list.css';

const initialState = {
    term: '',
    countryCode: ''
}

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;

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
        const term = this.state.term;
        const countryCode = this.state.countryCode;
        if(!term || !countryCode){
            return false;
        }
        event.preventDefault();

        this.props.weatherFetchData(term, countryCode);
        this.setState(initialState);
    }

        render() {
                return (
                        <form className="input-group" onSubmit={this.onFormSubmit}>
                            <input
                                placeholder="City"
                                className="form-control"
                                value={this.state.term}
                                onChange={this.onInputChangeCity}
                            />
                            <input
                                placeholder="Country"
                                className="form-control"
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ weatherFetchData }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);