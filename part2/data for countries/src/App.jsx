import axios from 'axios'
import {useState, useEffect} from 'react'

const App = ({countriesData}) => {

  console.log(countriesData);


  return (
    <div>
      <p>Hello world</p>
      <p>{countriesData.map(country => country.name.common)}</p>
    </div>
  )
}

export default App
