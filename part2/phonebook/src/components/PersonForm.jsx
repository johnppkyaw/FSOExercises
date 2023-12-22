const PersonForm = ({newName, nameInput, newNumber, numberInput, addNameNumber}) => {
  return (
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
  )
}

export default PersonForm
