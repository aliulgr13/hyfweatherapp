import React from 'react';

function CityCard({ cityInfos }) {

    return (
        <div className="card">
            <h1>{cityInfos.name}, {cityInfos.sys.country}</h1>
            <h2>{cityInfos.weather[0].main}</h2>
            <h3>{cityInfos.weather[0].description}</h3>
            <h3>min temp: {cityInfos.main.temp_min} °C</h3>
            <h3>max temp:  {cityInfos.main.temp_max} °C</h3>
            <h3>location: {cityInfos.coord.lon}, {cityInfos.coord.lat} </h3>
        </div>

    );
}

export default CityCard
