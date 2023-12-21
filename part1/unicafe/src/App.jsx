import { useState } from 'react';

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick} text={text}>{text}</button>
  )
}

const StatInfo = ({text, textValue}) => {
  return (
    <div>{text} {textValue}</div>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const numReviews = good + neutral + bad;
  const totalScore = good - bad;
  const average = totalScore/numReviews;
  const positiveRate = good/numReviews * 100;

  return (
    <>
      <h1>statistics</h1>
      <StatInfo text="good" textValue={good} />
      <StatInfo text="neutral" textValue={neutral} />
      <StatInfo text="bad" textValue={bad} />
      <StatInfo text="all" textValue={numReviews} />
      <StatInfo text="average" textValue={average} />
      <StatInfo text="positive" textValue={positiveRate + '%'} />
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
