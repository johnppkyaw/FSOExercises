import { useState } from 'react';
import { useEffect } from 'react';

const Country = ({filteredCountries}) => {

    const [countryMatchCount, setCountryMatchCount] = useState(0);
    const [targetCountry, setTargetCountry] = useState(null);

    useEffect(() => {
        setCountryMatchCount(filteredCountries.length);
        setTargetCountry(filteredCountries[0]);
    },[filteredCountries])

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
            </>
        )
    }
}

export default Country;
