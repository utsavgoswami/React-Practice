import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  const good = () => {
    store.dispatch({
      type: 'GOOD'
    })
  }

  const neutral = () => {
    store.dispatch({
      type: 'OK'
    })
  }

  const bad = () => {
    store.dispatch({
      type: 'BAD'
    })
  }
  
  const reset = () => {
    store.dispatch({
      type: 'ZERO'
    })
  }

  const curState = store.getState()
  const all = curState.good + curState.bad + curState.ok
  const average = (curState.good - curState.bad) / all
  const positivePercentage = (curState.good / all) * 100  

  return (
    <div>
      <button onClick={good}>Good</button> 
      <button onClick={neutral}>Neutral</button> 
      <button onClick={bad}>Bad</button>
      <button onClick={reset}>Reset Stats</button>
      <div>Good: {store.getState().good}</div>
      <div>Neutral: {store.getState().ok}</div>
      <div>Bad: {store.getState().bad}</div>
      <div>All: {all}</div>
      <div>{ all === 0 ? '' : 'Average: ' + average}</div>
      <div>{ all === 0 ? '' : 'Positive: ' + positivePercentage + '%'}</div>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
