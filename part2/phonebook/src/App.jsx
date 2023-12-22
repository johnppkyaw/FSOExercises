import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

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

      <Filter value={newFilter} onChange={filterList}/>

      <h3>Add a new</h3>

      <PersonForm
        newName={newName}
        nameInput={nameInput}
        newNumber={newNumber}
        numberInput={numberInput}
        addNameNumber={addNameNumber}
        />

      <h2>Numbers</h2>

      <Persons filteredList={filteredList} persons={persons}/>

    </div>
  )
}

export default App
