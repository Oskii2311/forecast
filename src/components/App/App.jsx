import React from 'react';
import SearchBar from '../../containers/SearchBar/search_bar';
import WeatherList from '../../containers/WeatherList/weather_list';
import './App.css';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <WeatherList />
    </div>
  );
}

export default App;
