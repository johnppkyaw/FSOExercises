import { useState } from 'react';

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick} text={text}>{text}</button>
  )
}

const StatInfo = ({text, textValue}) => {
  return (
    <>
    <td>{text}</td>
    <td>{textValue}</td>
    </>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const numReviews = good + neutral + bad;
  const totalScore = good - bad;
  const average = totalScore/numReviews;
  const positiveRate = good/numReviews * 100;

  if(good == 0 && neutral == 0 && bad == 0) {
    return (
      <>
        <h1>statistics</h1>
        <h4>No feedback given</h4>
      </>
    )
  }

  return (
    <>
      <h1>statistics</h1>
      <table>
        <tbody>
        <tr>
        <StatInfo text="good" textValue={good} />
        </tr>
        <tr>
        <StatInfo text="neutral" textValue={neutral} />
        </tr>
        <tr>
        <StatInfo text="bad" textValue={bad} />
        </tr>
        <tr>
        <StatInfo text="all" textValue={numReviews} />
        </tr>
        <tr>
        <StatInfo text="average" textValue={average} />
        </tr>
        <tr>
        <StatInfo text="positive" textValue={positiveRate + '%'} />
        </tr>
        </tbody>       
      </table>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(prev => prev + 1)} text="good"/>
      <Button handleClick={() => setNeutral(prev => prev + 1)} text="neutral" />
      <Button handleClick={() => setBad(prev => prev + 1)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
