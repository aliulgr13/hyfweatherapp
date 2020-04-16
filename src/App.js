import React, { useState } from 'react'
import './App.css';
import CityCard from './CityCard';
import Search from './Search'


function App() {
  const [cityInfos, setCityInfos] = useState('');
  const [hasError, setError] = useState('');
  const [isLoading, setLoading] = useState(false);


  return (
    <div className="App">
      <h1>Weather</h1>
      {isLoading && <h1 style={{ color: 'lightblue', margin: '3px' }} >Loading...</h1>}
      <Search setCityInfos={setCityInfos} setError={setError} setLoading={setLoading} />
      <h1 style={{ color: 'red', margin: '5px' }} >{hasError}</h1>
      {cityInfos ? <CityCard cityInfos={cityInfos} /> : <p>Enter a City or Country</p>}
    </div>
  );
}

export default App;
