import React from 'react'

const GithubReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        // Return the current state or Spread across anything in that is currently in the state
        ...state,
        users: action.payload,
        loading: false,
      }
      
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      }
    default:
      return state
  }
}

export default GithubReducer
