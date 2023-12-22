import { useState } from 'react'
import Number from './components/Number'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: '040-1234567'
    }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const nameInput = (e) => {
    setNewName(e.target.value);
  }

  const numberInput = (e) => {
    setNewNumber(e.target.value);
  }

  const addNameNumber = (e) => {
    e.preventDefault();
    const targetPerson = persons.find(person => person.name == newName);
    if(targetPerson) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const newPerson = {
        name: newName,
        number: newNumber
      };
      setPersons(persons.concat(newPerson));
      setNewName('');
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={nameInput} />
        </div>
        <div>
          number: <input value={newNumber} onChange={numberInput}/></div>
        <div>
          <button type="submit" onClick={addNameNumber}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <Number key={person.name} name={person.name} number={person.number} />)}
    </div>
  )
}

export default App
