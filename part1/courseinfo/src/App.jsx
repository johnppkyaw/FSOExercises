const Header = ({title}) => {
  return (
    <h1>{title}</h1>
  )
}

const Content = ({parts}) => {
  return (
    <>
      {
        parts.map((part, index) => {
          return (
            <p key={index}>{part.name} {part.exercises}</p>
          )
        })
      }
    </>
  )
}

const Total = ({parts}) => {
  return (
    <p>Number of exercises {parts.reduce((total, part) => {
      total += part.exercises;
      return total;
    }, 0)}</p>
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
      <Header title={course.name}/>
      <Content parts={course.parts}/>
      <Total key="total" parts = {course.parts}/>
    </div>
  )
}

export default App