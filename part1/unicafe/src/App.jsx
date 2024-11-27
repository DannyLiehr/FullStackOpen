import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [ good, setGood ] = useState(0);
  const [ neutral, setNeutral ] = useState(0);
  const [ bad, setBad ] = useState(0);
  const [ total, setTotal ] = useState(0);
  const [ avg, setAvg ] = useState(0);


  function updateFeedback(type) {
    // Update the feedback counts and total
    setTotal((currentTotal) => {
      const newTotal = currentTotal + 1;
      // Calculate the new average after updating the total
      calcAvg(good + (type === 'good' ? 1 : 0), bad + (type === 'bad' ? 1 : 0), neutral + (type === 'neutral' ? 1 : 0), newTotal);
      calcPositive(good + (type === 'good' ? 1 : 0), neutral + (type === 'neutral' ? 1 : 0), bad + (type === 'bad' ? 1 : 0));
      return newTotal;
    });

    if (type === 'good') {
      setGood((currentGood) => currentGood + 1);
    } else if (type === 'neutral') {
      setNeutral((currentNeutral) => currentNeutral + 1);
    } else if (type === 'bad') {
      setBad((currentBad) => currentBad + 1);
    }
  }

  function calcAvg(g, b, n){
    let avg = (g + b + n) / 3;
    setAvg(avg.toFixed(2));
  }

  function calcPositive(g, n, b){
    let positive = (g / (g + n + b)) * 100;
    if (isNaN(positive)) {
      return 0;
    } else {
      let emoji;
      if (positive > 75) {
        emoji = '😊'; // Over 75% positive.
      } else if (positive > 50) {
        emoji = '😐'; // Not over 75, but over 50.
      } else {
        emoji = '🙁'; // Under 50.
      }
      return `${positive.toFixed(1)}% ${emoji}`;
    }
  }

  return (
    <>
      <div id="wrapper">
        <h1>Unicafe</h1>
        <div>
        <h2>Give feedback</h2>
          <button onClick={() => updateFeedback('good')}>good</button> 
          <button onClick={() => updateFeedback('neutral')}>neutral</button>
          <button onClick={() => updateFeedback('bad')}>bad</button>
        </div>

        <div>
          <h2>Stats</h2>
          <p>🙂- {good}</p>
          <p>😐- {neutral}</p>
          <p>🙁- {bad}</p>
          <br/>
          <p>All: {total}</p>
          <p>Avg: {avg}</p>
          <p>Positive: {calcPositive(good, neutral, bad)}</p>
        </div>
      </div>
    </>
  )
}

export default App
