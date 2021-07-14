import React, { useState } from 'react'

const Header = ({ text }) => (<h1>{text}</h1>)

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]

  const [selected, setSelected] = useState(0)

  // code from https://stackoverflow.com/a/20222538
  const [votes, setVotes] = useState(Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0))

  const changeAnecdote = () => (
    setSelected(Math.floor(Math.random() * anecdotes.length))
  )

  const addPoint = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }


  const mostVotes = (arr) => {
  // code from https://stackoverflow.com/a/11301464 (slightly modified)
    let max = arr[0]
    let maxIndex = 0
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
          maxIndex = i;
          max = arr[i];
      }
    }
    return maxIndex
  }

  return (
    <div>
      <Header text="Anecdote of the day"/>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button handleClick={addPoint} text="vote"/>
      <Button handleClick={changeAnecdote} text="next anecdote"/>
      <Header text="Anecdote with most votes"/>
      <p>{anecdotes[mostVotes(votes)]}</p>
    </div>
  )
}

export default App
