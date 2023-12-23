const Number = ({name, number, deleteContact}) => {
  return (
    <div>{name} {number} <button onClick={deleteContact} value={name}>delete</button></div>
  )
}

export default Number;
