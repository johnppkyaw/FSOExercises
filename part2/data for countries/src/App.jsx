import axios from 'axios'
import {useState, useEffect} from 'react'
import Country from "./components/Country"

const App = ({countriesData}) => {

  const [filteredCountries, setFilteredCountries] = useState([]);
  const [inputName, setInputName] = useState("");


  const setFilter = (e) => {
    const filter = e.target.value.toLowerCase();
    setInputName(filter)
    const filtered = countriesData.filter(country => {
      console.log(country.name.common.length);
      console.log(filter.length);
      if(country.name.common.toLowerCase().includes(filter)) {
        return country.name.common.length == filter.length || country.name.common.toLowerCase().includes(filter)
      }
    });
    setFilteredCountries(filtered);
    console.log(filteredCountries);

  }



  return (
    <div>
      <div>find countries <input value={inputName} onChange={setFilter}/></div>
      <Country filteredCountries={filteredCountries}/>
    </div>
  )
}

export default App
