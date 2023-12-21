import { useState } from 'react'

const NextAnecdote = ({changeAnecdote, addVote}) => {
  return (
    <div>
      <button onClick={addVote}>Vote</button>
      <button onClick={changeAnecdote}>Next anecdote</button>
    </div>
    
  )
}
const findMaxIndex = (arr) => {
  let max = 0;
  let maxIndex = 0;
  arr.forEach((num, index) => {
    if(num > max) {
      max = num;
      maxIndex = index;
    }
  });
  return maxIndex;
}

const MostVotes = ({scores, anecdotes}) => {
  const maxIndex = findMaxIndex(scores);
  return (
    <>
    <h1>Anecdote with most votes</h1>
    {anecdotes[maxIndex]}
    <div>has {scores[maxIndex]} votes</div>  
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const numAnecdotes = anecdotes.length;
   
  const [selected, setSelected] = useState(0);
  const [scores, setScores] = useState(Array(numAnecdotes).fill(0));

  const changeAnecdote = () => {
    setSelected(Math.floor(Math.random() * (anecdotes.length)));
  }

  const addVote = () => {
    setScores(prev => {
      const newScores = [...prev];
      newScores[selected] += 1;
      return newScores;
    });
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <div>has {scores[selected]} votes</div>
      <NextAnecdote changeAnecdote={changeAnecdote} addVote={addVote}/>
      <MostVotes scores={scores} anecdotes={anecdotes}/>
    </div>
  )
}

export default App