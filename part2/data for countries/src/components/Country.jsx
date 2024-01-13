import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const Country = ({filteredCountries}) => {

    const [countryMatchCount, setCountryMatchCount] = useState(0);
    const [targetCountry, setTargetCountry] = useState(null);
    const [weatherInfo, setWeatherInfo] = useState(null);

    const api_key = import.meta.env.VITE_SOME_KEY;

    useEffect(() => {
        setCountryMatchCount(filteredCountries.length);

        if(filteredCountries.length === 1) {
            setTargetCountry(filteredCountries[0]);
        }
    },[filteredCountries])

    useEffect(() => {
        if (targetCountry) {
          const lat = targetCountry.latlng[0];
          const long = targetCountry.latlng[1];

          axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${api_key}`)
            .then((response) => {
              const weatherData = response.data;
              setWeatherInfo(weatherData);
            })
            .catch((error) => {
              console.error('Error fetching weather data:', error);
            });
        }
      }, [targetCountry]);

    const showCountry = (country) => {
        setCountryMatchCount(1);
        setTargetCountry(country);
    }

    if (countryMatchCount > 10) {
        return (
            <div>Too many matches, specify another filter</div>
        )
    }
    if (countryMatchCount <= 10 && countryMatchCount > 1) {
        return (
            filteredCountries.map(country => (
                <div key={country.area}>{country.name.common}<button onClick={()=> showCountry(country)}>show</button></div>
            ))
        )
    }
    if (countryMatchCount == 1) {
        return (
            <>
            <h1>{targetCountry.name.common}</h1>
            <div>capital {targetCountry.capital[0]}</div>
            <div>area {targetCountry.area}</div>
            <h3>languages:</h3>
            <ul>
                {Object.values(targetCountry.languages).map((language, idx) => (
                    <li key = {idx}>{language}</li>
                ))}
            </ul>
            <img src={targetCountry.flags.png} width="150" alt="the picture of the country flag"></img>
            {weatherInfo && (
                <>
                <h2>Weather in {targetCountry.capital[0]}</h2>
                <p>temperature {weatherInfo.main.temp} Celcius</p>
                <img src={`https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`} alt="picture-of-weather-condition"></img>
                <p>wind {weatherInfo.wind.speed} m/s</p>
                </>
                )}
            </>
        )
    }
}

export default Country;
