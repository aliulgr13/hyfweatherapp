import React, { useState } from 'react'
import './App.css';
import CityCard from './CityCard';
import Search from './Search'


function App() {
  const [citiesInfos, setCitiesInfos] = useState([]);
  const [hasError, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  const removeCity = (index) => {
    //first way
    // const newCities = [...citiesInfos];
    // newCities.splice(index, 1)
    // setCitiesInfos(newCities)

    //second way
    const cities = [...citiesInfos];
    const newCities = cities.filter((city) => city.id !== index);
    setCitiesInfos(newCities)

  }

  return (
    <div className="App">
      <h1>Weather</h1>
      {isLoading && <h1 style={{ color: 'lightblue', margin: '3px' }} >Loading...</h1>}
      <Search setCitiesInfos={setCitiesInfos} setError={setError} setLoading={setLoading} />
      <h1 style={{ color: 'red', margin: '5px' }} >{hasError}</h1>
      {citiesInfos.length > 0 ? citiesInfos.map((cityInf, index) => (
        <CityCard key={index} index={index} removeCity={removeCity} cityInf={cityInf} />
      )) : <p>Enter a City or Country</p>}
    </div>
  );
}

export default App;
