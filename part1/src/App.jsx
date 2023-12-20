const Header = (prop) => {
  return (
    <h1>{prop.title}</h1>
  )
}

const Content = () => {
  return (
    <div>
      <Part />
      <Part />
      <Part />
    </div>
  )
}

const Part = () => {
  return (
    <p></p>
  )
}

const Total = () => {
  return (
    <p></p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header title={course}/>
      <Content parts={parts}/>
      <Total parts = {parts}/>
    </div>
  )
}

export default App