import Number from './Number';

const Persons = ({filteredList, persons}) => {
  return (
    <>
    {
      filteredList.length > 0
      ? filteredList.map(person => <Number key={person.name} name={person.name} number={person.number} />)
      : persons.map(person => <Number key={person.name} name={person.name} number={person.number} />)
    }
    </>
  )
}

export default Persons;
