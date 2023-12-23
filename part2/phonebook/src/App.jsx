import { useState, useEffect } from 'react'
import phonebookService from './services/persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  // { name: 'Arto Hellas', number: '040-123456', id: 1 },
  // { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
  // { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
  // { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    phonebookService
      .getAll()
      .then(initialList => {
        setPersons(initialList)
      })
  },[])

  const nameInput = (e) => {
    setNewName(e.target.value);
  }

  const numberInput = (e) => {
    setNewNumber(e.target.value);
  }

  const addNameNumber = (e) => {
    e.preventDefault();
    const targetPerson = persons.find(person => person.name == newName);
    const newPerson = {
      name: newName,
      number: newNumber
    };
    if(targetPerson) {
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const id = targetPerson.id;
      phonebookService
        .update(id, newPerson)
        .then(updatedInfo => {
          setPersons(persons.map(person => person.id != id ? person : updatedInfo))
          setNewName('');
          setNewNumber('');
        })
      }
    } else {
      phonebookService
        .create(newPerson)
        .then(returnedInfo => {
          setPersons(persons.concat(returnedInfo));
          setNewName('');
          setNewNumber('');
        })
    }
  }

  const filterList = (e) => {
    const filterInput = e.target.value.toLowerCase();
    setNewFilter(filterInput);
    const filtered = persons.filter(person => person.name.toLowerCase().includes(filterInput));
    setFilteredList(filtered);
  }

  const deleteContact = (e) => {
    e.preventDefault();
    const targetContact = persons.find(person => person.name == e.target.value);
    if(window.confirm(`Delete ${targetContact.name}?`)) {
      phonebookService
        .remove(targetContact.id)
        .then(() => {
          setPersons(persons.filter(person => person.name != e.target.value));
        })
    }
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

      <Persons filteredList={filteredList} persons={persons} deleteContact={deleteContact}/>

    </div>
  )
}

export default App
