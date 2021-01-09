import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'

const Anecdote = ({ id, content, votes, handleClick }) => {
    return (
        <div key={id}>
          <div>
            {content}
          </div>
          <div>
            has {votes}
            <button onClick={ handleClick }>vote</button>
          </div>
        </div>
    )
}


const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state)

    return (
        <div>
            {anecdotes.map(anecdote => <Anecdote
                                                key={anecdote.id} 
                                                id={anecdote.id}
                                                content={anecdote.content}
                                                votes={anecdote.votes}
                                                handleClick={() => dispatch(addVote(anecdote.id))}/>)}
        </div>
    )
}

export default AnecdoteList