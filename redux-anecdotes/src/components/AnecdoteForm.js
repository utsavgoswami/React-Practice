import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { createNotification, hideNotification } from '../reducers/notificationReducer'


const AnecdoteForm = props => {
    const dispatch = useDispatch()


    const addAnecdote = event => {
        event.preventDefault()
        const content = event.target.anecdote.value
    
        // Reset the form for the next submission
        event.target.anecdote.value = ''
        dispatch(createAnecdote(content))
        dispatch(createNotification("You created \"" + content + "\""))
        
        setTimeout(() => dispatch(hideNotification()), 5000)
    }

    return (
        <div>
            <h2>Create New</h2>
            <form onSubmit={addAnecdote}>
                <div><input name="anecdote"/></div>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default AnecdoteForm