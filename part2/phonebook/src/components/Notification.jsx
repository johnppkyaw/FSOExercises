const Notification = ({errorMessage, successMessage}) => {
  if(errorMessage === null && successMessage === null) return null;

  return (

     errorMessage
     ? <div className = 'error'>{errorMessage}</div>
     : <div className = 'success'>{successMessage}</div>

  )

}

export default Notification
