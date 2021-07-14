import React, { useState } from 'react'

const Header = ({ text }) => (<h1>{text}</h1>)

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => {
  if (props.percentage === true) {
    return  <tr>
              <td>{props.text}</td>
              <td>{props.value} %</td>
            </tr>
  }
  return  <tr>
            <td>{props.text}</td>
            <td>{props.value}</td>
          </tr>
}

const Statistics = ({good, neutral, bad}) => {
  if (good+neutral+bad === 0) {
    return <p>No feedback given</p>
  }
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good}/>
        <StatisticLine text="neutral" value={neutral}/>
        <StatisticLine text="bad" value={bad}/>
        <StatisticLine text="all" value={good+neutral+bad}/>
        <StatisticLine text="average" value={(good*1+neutral*0+bad*-1)/(good+neutral+bad)}/>
        <StatisticLine text="positive" value={good/(good+neutral+bad)*100} percentage={true}/>
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => {
    setGood(good + 1)
  }

  const addNeutral = () => {
    setNeutral(neutral + 1)
  }

  const addBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Header text="give feedback"/>
      <Button handleClick={addGood} text="good"/>
      <Button handleClick={addNeutral} text="neutral"/>
      <Button handleClick={addBad} text="bad"/>
      <Header text="statistics"/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App