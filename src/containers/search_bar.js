import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			term: '',
			countryCode: ''
		};

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

		this.props.fetchWeather(term, countryCode);
		this.setState({
			term: '',
			countryCode: ''
		});
	}

		render() {
				return (
						<form className="input-group" onSubmit={this.onFormSubmit}>
							<input
								placeholder="Get city"
								className="form-control"
								value={this.state.term}
								onChange={this.onInputChangeCity}
							/>
							<input
								placeholder="Get country code"
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
	return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);