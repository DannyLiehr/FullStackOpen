import './App.css';

const Header = (props) => {
  return (
      <h2>{props.course}</h2>
  )
}

const Courses = (props) => {
  return (
      <div id="course">
        <h2>Available Courses</h2>
        <ul>
          { 
            props.crs.map((item, idx)=>{
              return(
                <li key={idx}>{item.name} - Exercises: {item.exercises}</li>
              )
            })
          }
        </ul>
        
      </div>
  )
}

const Total = (props) => {
  let num= 0;
  props.tot.forEach((item)=>{
    num+= item.exercises;
  })
  return (
    <span>{num}</span>
  )
}


const App = () => {
  const courseMap ={
    name: 'Half Stack Application Development',
    classes:[
      {name: 'Fundamentals of React', exercises: 10},
      {name: 'Using props to pass data', exercises: 7},
      {name: 'State of a component', exercises: 14}
    ]
  }

  return (
    <div id="wrapper">
      <Header course={courseMap.name}/>
      <Courses crs={courseMap.classes}/>
      <p>Total Exercises: <Total tot={courseMap.classes} /></p>
    </div>
  )
}

export default App