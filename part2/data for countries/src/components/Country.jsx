const Country = ({filteredCountries}) => {
    const countryMatchCount = filteredCountries.length;
    const targetCountry = filteredCountries[0];

    if ( countryMatchCount > 10) {
        return (
            <div>Too many matches, specify another filter</div>
        )
    } else if (countryMatchCount <= 10) {
        if(countryMatchCount == 1) {
            console.log(targetCountry);
            return (
                <>
                <h1>{targetCountry.name.common}</h1>
                <div>capital {targetCountry.capital[0]}</div>
                <div>area {targetCountry.area}</div>
                <h3>languages:</h3>
                <ul>
                    {Object.values(targetCountry.languages).map(language => (
                        <li>{language}</li>
                    ))}
                </ul>
                <img src={targetCountry.flags.png} width="200" height="200" alt="the picture of the country flag"></img>
                </>
            )
        } else {
            return (
                filteredCountries.map(country => (
                    <div key={country.area}>{country.name.common}</div>
                ))
            )
        }

    }
}

export default Country;
