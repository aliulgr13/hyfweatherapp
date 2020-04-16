import React, { useState } from 'react'

function Search({ setCityInfos, setError, setLoading }) {

    const [city, setCity] = useState('');

    const getCity = async () => {
        const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

        try {
            setLoading(true)
            let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
            console.log(response)
            // to prevent old error showing on the screen
            setError('')
            // to check entering correct city or country name.
            // I want to know If there is a optimal way to make a feedback after entering wrong city name
            if (response.status === 404) { throw new Error("City or country not found") }
            let res = await response.json()
            setLoading(false)
            setCityInfos(res)
        } catch (e) {
            console.log(e.name)
            setError(e.message)
            setLoading(false)
        }
    }
    const handleSubmit = (e) => {
        setCityInfos('')
        e.preventDefault();
        if (!city) return;
        getCity();
        setCity('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" className='input'
                    //Do we have to use value={city} in here, without value={city} it is working as well
                    value={city}
                    placeholder='Search City'
                    onChange={e => setCity(e.target.value)} />
                <button >Search</button>
            </form>
        </div>
    )
}

export default Search
