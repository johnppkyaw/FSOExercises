import { useState } from 'react'
import Number from './components/Number'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const nameInput = (e) => {
    setNewName(e.target.value);
  }

  const addName = (e) => {
    e.preventDefault();
    const targetPerson = persons.find(person => person.name == newName);
    if(targetPerson) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const newPerson = {
        name: newName
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
          <button type="submit" onClick={addName}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <Number key={person.name} name={person.name}/>)}
    </div>
  )
}

export default App
