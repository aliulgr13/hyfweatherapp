import React from 'react';

// to use second way we use index instead of id wen we calling removeCity
function CityCard({ cityInf, index, removeCity }) {
    console.log(cityInf)
    return (
        <div className="card">
            <button onClick={() => removeCity(cityInf.id)} style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer', color: 'red', fontSize: '35px', position: 'absolute', top: '3px', right: '2px' }}><i class="far fa-times-circle"></i></button>
            <h1>{cityInf.name}, {cityInf.sys.country}</h1>
            <h2>{cityInf.weather[0].main}</h2>
            <h3>{cityInf.weather[0].description}</h3>
            <h3>min temp: {cityInf.main.temp_min} °C</h3>
            <h3>max temp:  {cityInf.main.temp_max} °C</h3>
            <h3>location: {cityInf.coord.lon}, {cityInf.coord.lat} </h3>
        </div>
    );
}

export default CityCard
