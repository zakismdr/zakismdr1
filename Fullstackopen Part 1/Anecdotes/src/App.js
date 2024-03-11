import { useState } from 'react'


const Title = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  )
}

const Anecdotes = (props) => {
  return(
    <div>
      <div>{props.anecdotes}</div>
      <div>has {props.votes} votes</div>
    </div>
  )
}

const Button = (props) => {
  return (
  <div>
    <button onClick={props.handleClick}>{props.text}</button>
  </div>
  )
}

const MostVotes = (props) => {
  return (
    <div>
      <div>{props.anecdotes}</div>
      <div>has {props.max} votes</div>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'The programmer stared at the blinking cursor for hours, until suddenly the solution hit them like a bolt of lightning from the code gods.',
    'After debugging for days, they realized the issue was a misplaced semicolon. The code worked flawlessly, but their pride remained tarnished.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'They spent hours researching the perfect variable name, only to have it make no sense a week later.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [voted, setVoted] = useState(Array(anecdotes.length).fill(0))

  const nextClick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const voteClick = () => {
    const newVotes = [...voted]
    newVotes[selected] += 1
    setVoted(newVotes)
  }

  
  const max = Math.max(...voted)
  const index = voted.indexOf(max)

  return (
    <div>
      <Title text='Anecdote of the day by zakismdr'/>
      <Anecdotes anecdotes={anecdotes[selected]} votes={voted[selected]}/>
      <Button handleClick={nextClick} text='next anecdote'/>
      <Button handleClick={voteClick} text='vote'/>
      <Title text='Anecdote with most votes'/>
      <MostVotes anecdotes={anecdotes[index]} max={max} />
    </div>
  )
}

export default App;
