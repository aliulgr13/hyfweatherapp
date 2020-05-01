import React from 'react';
import { Link } from "react-router-dom";

// to use second way we use index instead of id wen we calling removeCity
function CityCard({ cityInf, index, removeCity }) {
    console.log(cityInf)

    return (

        <div className="card">
            <button onClick={() => removeCity(cityInf.city.id)} style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer', color: 'red', fontSize: '35px', position: 'absolute', top: '3px', right: '2px' }}><i className="far fa-times-circle"></i></button>
            <Link to={`/${cityInf.city.id}`} >
                <h1>{cityInf.city.name}, {cityInf.city.country}</h1>
            </Link >
            <h2>{cityInf.list[0].weather[0].main}</h2>
            <h3>{cityInf.list[0].weather[0].description}</h3>
            <h3>min temp: {cityInf.list[0].main.temp_min} °C</h3>
            <h3>max temp:  {cityInf.list[0].main.temp_max} °C</h3>
            <h3>location: {cityInf.city.coord.lon}, {cityInf.city.coord.lat} </h3>
        </div>


    );
}

export default CityCard
