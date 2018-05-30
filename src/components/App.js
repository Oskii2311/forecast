import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
import './style/App.css';

class App extends Component {
    render(){
        return (
        <div className="App">
            <SearchBar />
            <WeatherList />
        </div>
        )
    }
}

export default App;