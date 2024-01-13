const Country = ({filteredCountries}) => {
    const countryMatchCount = filteredCountries.length;
    const targetCountry = filteredCountries[0];

    if ( countryMatchCount > 10) {
        return (
            <div>Too many matches, specify another filter</div>
        )
    } else if (countryMatchCount <= 10) {
        if(countryMatchCount == 1) {
            return (
                <h1>{targetCountry.name.common}</h1>
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