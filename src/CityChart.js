import React from 'react';
import {
    Link,
    useParams,
    useHistory
} from "react-router-dom";

import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';


function CityChart({ citiesInfos }) {
    const { cityId } = useParams();
    const history = useHistory()
    console.log(cityId)

    // to show infos of sibling element in the array 
    function nextCityFinder(index) {
        return citiesInfos[index];
    }
    let nextCity;

    //to find and write the selected city
    const cityInfos = citiesInfos.find((cityInf, index) => {
        if (cityInf.city.id === parseInt(cityId, 10)) {
            nextCity = nextCityFinder(index + 1)
            return cityInf
        }
    });
    console.log(cityInfos)
    let data;

    if (cityInfos) {
        data = [
            { Date: new Date(cityInfos.list[0].dt_txt).toLocaleDateString(), Temp: cityInfos.list[0].main.temp },
            { Date: new Date(cityInfos.list[8].dt_txt).toLocaleDateString(), Temp: cityInfos.list[8].main.temp },
            { Date: new Date(cityInfos.list[16].dt_txt).toLocaleDateString(), Temp: cityInfos.list[16].main.temp },
            { Date: new Date(cityInfos.list[24].dt_txt).toLocaleDateString(), Temp: cityInfos.list[24].main.temp },
            { Date: new Date(cityInfos.list[32].dt_txt).toLocaleDateString(), Temp: cityInfos.list[32].main.temp }
        ];
    } else {
        data = '';
    }

    const SimpleAreaChart = () => {
        return (
            <AreaChart width={600} height={400} data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Date" />
                <YAxis />
                <Tooltip />
                <Area type='monotone' dataKey='Temp' stroke='#8884d8' fill='#8884d8' />
            </AreaChart>
        );
    }

    const goBack = () => {
        history.goBack();
    }
    return (
        <div style={{ width: '700px', margin: ' 0 auto', textAlign: 'center' }}>
        <h1 style={{ color: '#f0a500',textShadow: '-3px 0 #cf7500, 0 3px #cf7500, 3px 0 #cf7500, 0 -3px #cf7500', fontSize: '50px',fontWeight: 'bold' }}>5 DAY FORECAST</h1>
            <Link style={{ textDecoration: 'none' }} to={'/home'} >
                <button>Home</button>
            </Link >
            <button onClick={goBack}>Go Back</button>
            {nextCity && <Link to={`/${nextCity && nextCity.city.id}`} ><button>Next City</button></Link >}
            <h1 style={{ color: '#0764D3',textShadow: '-2px 0 #1f4068, 0 2px #1f4068, 2px 0 #1f4068, 0 -2px #1f4068', fontSize: '50px', letterSpacing: '5px', textTransform: 'uppercase' }}>{cityInfos && cityInfos.city.name}</h1>
            <div style={{ backgroundColor: 'rgba(256,256,256,0.7)',margin:'0 20px' }}>
                {cityInfos && <SimpleAreaChart />}
            </div>

        </div >
    )
}

export default CityChart
