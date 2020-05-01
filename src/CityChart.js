import React from 'react';
import {
    Link,
    useParams,
    useHistory
} from "react-router-dom";

import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

// const { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } = Recharts;

function CityChart({ citiesInfos }) {
    const { cityId } = useParams();
    const history = useHistory()
    console.log(cityId)

    const cityInfos = citiesInfos.find(cityInf => cityInf.city.id === parseInt(cityId, 10));
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

    const handleClick = () => {
        history.goBack();
    }
    return (
        <div style={{ width: '60%', margin: ' 50px auto', textAlign: 'center' }}>
            <div style={{ color: 'coral', fontWeight: 'bold', margin: '20px', fontSize: '40px' }}>5 Day Forecast</div>
            <Link style={{ textDecoration: 'none' }} to={'/home'} >
                <button style={{ witdh: '200px', fontSize: '30px', color: 'white', backgroundColor: 'blue', margin: '20px', }} >Home</button>
            </Link >
            <button onClick={handleClick} style={{ witdh: '200px', fontSize: '30px', color: 'white', backgroundColor: 'blue', margin: '20px', }} >Go Back</button>
            <div style={{ width: '600px', margin: '20px auto' }}>
                {cityInfos && <SimpleAreaChart />}
            </div>

        </div >
    )
}

export default CityChart
