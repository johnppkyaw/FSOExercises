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
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header title={course}/>
      <Content />
      <Total />
    </div>
  )
}

export default App