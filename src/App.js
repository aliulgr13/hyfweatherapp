import React, { useState } from "react";
import "./App.css";
import CityCard from "./CityCard";
import Search from "./Search";
import CityChart from "./CityChart";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  const [citiesInfos, setCitiesInfos] = useState([]);
  const [hasError, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const removeCity = (index) => {
    //first way
    // const newCities = [...citiesInfos];
    // newCities.splice(index, 1)
    // setCitiesInfos(newCities)

    //second way
    const cities = [...citiesInfos];
    const newCities = cities.filter((cityInf) => cityInf.city.id !== index);
    setCitiesInfos(newCities);
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home" exact>
            <h1
              style={{
                color: "#f0a500",
                textShadow:
                  "-3px 0 #cf7500, 0 3px #cf7500, 3px 0 #cf7500, 0 -3px #cf7500",
                fontSize: "60px",
                fontWeight: "bold",
              }}
            >
              HYF WEATHER APP
            </h1>
            {isLoading && (
              <h1 style={{ color: "lightblue", margin: "5px" }}>
                <i className="fa fa-cog fa-spin" />
              </h1>
            )}
            <Search
              setCitiesInfos={setCitiesInfos}
              setError={setError}
              setLoading={setLoading}
            />
            <h1 style={{ color: "red", margin: "5px" }}>{hasError}</h1>

            {citiesInfos.length > 0 ? (
              citiesInfos.map((cityInf, index) => (
                <CityCard
                  key={cityInf.city.id}
                  index={index}
                  removeCity={removeCity}
                  cityInf={cityInf}
                />
              ))
            ) : (
              <h3
                style={{
                  color: "#0764D3",
                  textShadow:
                    "-2px 0 #1f4068, 0 2px #1f4068, 2px 0 #1f4068, 0 -2px #1f4068",
                  fontSize: "30px",
                  fontWeight: "bold",
                }}
              >
                You Can Enter More Than One City
              </h3>
            )}
          </Route>
          <Route path="/:cityId">
            <CityChart citiesInfos={citiesInfos} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
