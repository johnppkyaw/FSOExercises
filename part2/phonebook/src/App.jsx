import { useState } from 'react'
import Number from './components/Number'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [filteredList, setFilteredList] = useState([]);

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

  const filterList = (e) => {
    const filterInput = e.target.value.toLowerCase();
    setNewFilter(filterInput);
    const filtered = persons.filter(person => person.name.toLowerCase().includes(filterInput));
    setFilteredList(filtered);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter shown with <input value={newFilter} onChange={filterList} /></div>

      <h2>add a new</h2>
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
      {
        filteredList.length > 0
        ? filteredList.map(person => <Number key={person.name} name={person.name} number={person.number} />)
        : persons.map(person => <Number key={person.name} name={person.name} number={person.number} />)
      }
    </div>
  )
}

export default App
