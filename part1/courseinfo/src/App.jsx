const Header = (props) => {
  return (
      <h2>{props.course}</h2>
  )
}

const Content = (props) => {
  return (
      <span>{props.cont} </span>
  )
}
const Total = (props) => {
  return (
      <span>{props.tot}</span>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    // <div>
    //   <h1>{course}</h1>
    //   <p>
    //     {part1} {exercises1}
    //   </p>
    //   <p>
    //     {part2} {exercises2}
    //   </p>
    //   <p>
    //     {part3} {exercises3}
    //   </p>
    //   <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    // </div>
    <div>
      <Header course={course}/>
      <p>
        <Content cont={part1}/> 
        <Total tot={exercises1}/>
      </p>
      <p>
        <Content cont={part2}/> 
        <Total tot={exercises2}/>
      </p>
      <p>
        <Content cont={part3}/> 
        <Total tot={exercises3}/>
      </p>
      <p>Number of exercises: {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App