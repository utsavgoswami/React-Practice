const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const getMatch = (obj, id) => obj.find(element => element.id === id)

const anecdoteReducer = (state = initialState, action) => {

  // Leave in for debugging 
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'ADD_VOTE':
      const id = action.data.id
      const toChange = state.find(element => element.id === id)

      const modified = {
        ...toChange,
        votes: toChange.votes + 1
      }

      return state.map(element => element.id === id ? modified : element)
    case 'CREATE_ANECDOTE':
      let newId = getId()

      // Ensure newly generated id hasn't already been used before
      while (getMatch(state, newId) !== undefined) {
        newId = getId() 
      }
      
      return state.concat({ content: action.data, id: newId, votes: 0 })
    default:
      return state      

  }
}

export const createAnecdote = content => {
  return {
    type: 'CREATE_ANECDOTE',
    data: content
  }
}

export const addVote = id => {
  return {
    type: 'ADD_VOTE',
    data: { id }
  }
}

export default anecdoteReducer