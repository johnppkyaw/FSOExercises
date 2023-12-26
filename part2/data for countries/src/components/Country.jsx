const Country = ({filteredCountries}) => {
    const countryMatchCount = filteredCountries.length;
    if ( countryMatchCount > 10) {
        return (
            <div>Too many matches, specify another filter</div>
        )
    } else if (countryMatchCount <= 10 && countryMatchCount > 1) {
        return (
            filteredCountries.map(country => (
                <div key={country.area}>{country.name.common}</div>
            ))
        )
    }
}

export default Country;